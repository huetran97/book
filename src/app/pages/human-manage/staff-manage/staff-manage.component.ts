import { Component, OnInit, Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { LocalDataSource,ViewCell } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import { async } from 'q';
import { StaffService } from '../../../@core/data/staff.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import {SharemodelService} from '../../../@core/data/sharemodel.service';
import { DateService } from '../../../@core/data/date.service';




@Component({
  selector: 'ngx-staff-manage',
  templateUrl: './staff-manage.component.html',
  styleUrls: ['./staff-manage.component.scss']
})


export class StaffManageComponent implements OnInit { 
  data; 
  name : String = 'Minh';
  source: LocalDataSource = new LocalDataSource();
  message :String;
  display:boolean = false;
  staff;
  modal={
    state: ''
  }
  datex =  new Date();
  staffEdit={
    id: '',
    user_name: '',
    email: '',
    date_of_birth:{
      year: 2018,
      month: 12,
      day: 2
    },
    sex: 'Nam',
    id_card_number: '',
    id_card_number_date: {
      year: 2018,
      month: 12,
      day: 2
    },
    // id_card_number_location: ''
    tax_number: '',
    insurrance_number: '',
    start_work_date:{
      year: 2018,
      month: 12,
      day: 2
    },
    end_work_date:{
      year: 2018,
      month: 12,
      day: 2
    },
    name: '',
    phone_number:'',
    store : {
        id:'',
        name:''
      },
    
    address:'',
    role:'',
};
  constructor(private service: SmartTableService,
    private staff_service: StaffService,
    private date_service: DateService) {
   
  }

 async ngOnInit() {
    const data = await this.staff_service.getListStaff();
    this.data =data;
    // this.data.storex = this.data.store.name
    this.source.load(this.data);
  }
  settings = {
      
    attr: {
      id: `style-view`
    },
    actions: {
      add: false,
      edit: false,
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      custom: [
        {
          name: 'view',
          title: '<i class="nb-sunny"></i>',
        },
        {
          name: 'edit',
          title: '<i class="nb-edit"></i> ',
          }
      ],
    }, 
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {      
      name: {
        title: 'Name',
        type: 'string',
      },
      // user_name: {
      //   title: 'User Name',
      //   type: 'string',
      // },
      phone_number: {
        title: 'Phone Number',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      role:{
        title:'Role',
        type:'String'
      },
      store:{
        title:'Store',
        type:'String',
        valuePrepareFunction: (store) => { return store.name },
        filter: true,
      }
   },
  };
  changeDisplay(){
      if(!this.display){
        this.display = !this.display;
      }
        else{
          this.display = !this.display;
        }
      }
  onEditConfirm(event){
    this.changeDisplay();
    this.modal.state = 'edit';
    // this.onEdit(event)
  }
  onAddConfirm(event){
    this.changeDisplay();
    this.modal.state = 'add';
    this.staffEdit={
      id: '',
      user_name: '',
      email: '',
      date_of_birth:{
        year: 2018,
        month: 12,
        day: 2
      },
      sex: 'Nam',
      id_card_number: '',
      id_card_number_date: {
        year: 2018,
        month: 12,
        day: 2
      },
      // id_card_number_location: ''
      tax_number: '',
      insurrance_number: '',
      start_work_date:{
        year: 2018,
        month: 12,
        day: 2
      },
      end_work_date:{
        year: 2018,
        month: 12,
        day: 2
      },
      name: '',
      phone_number:'',
      store : {
          id:'',
          name:'XMH BookStore',
        },
      
      address:'',
      role:'',
  }
  }
  
  onCustom(event) {
      if(event.action === 'edit'){
        this.onEditConfirm(event);
        this.staffEdit=event.data;
        this.staffEdit.date_of_birth = this.date_service.number_to_date(this.staffEdit.date_of_birth);
        this.staffEdit.id_card_number_date = this.date_service.number_to_date(this.staffEdit.id_card_number_date);
        this.staffEdit.start_work_date = this.date_service.number_to_date(this.staffEdit.start_work_date);
        this.staffEdit.end_work_date = this.date_service.number_to_date(this.staffEdit.end_work_date);
      }
      // else if(event.action === 'add'){
        // this.onAddConfirm(event);
        // console.log(event.action);          

       
    }
   async onClick(SEX,STORENAME,ROLE){
      if(this.modal.state === 'edit'){
        this.staff= this.staffEdit;
        this.staff.date_of_birth = this.date_service.date_to_number(this.staff.date_of_birth);
        this.staff.id_card_number_date = this.date_service.date_to_number(this.staff.id_card_number_date);
        this.staff.start_work_date = this.date_service.date_to_number(this.staff.start_work_date);
        this.staff.end_work_date = this.date_service.date_to_number(this.staff.end_work_date);
        this.staff.sex = SEX,
        this.staff.store.id = STORENAME,
        this.staff.role = ROLE,
        console.log(this.staff);
       if(await this.staff_service.editStaff(this.staff)){
         this.changeDisplay();
         this.data = await this.staff_service.getListStaff();
         this.source.load(this.data);
       }
      }else{
        this.staff= this.staffEdit;
        this.staff.date_of_birth = this.date_service.date_to_number(this.staff.date_of_birth);
        console.log(this.staff.date_of_birth);
        this.staff.id_card_number_date = this.date_service.date_to_number(this.staff.id_card_number_date);
        this.staff.start_work_date = this.date_service.date_to_number(this.staff.start_work_date);
        this.staff.end_work_date = this.date_service.date_to_number(this.staff.end_work_date);
        this.staff.sex = SEX,
        this.staff.store.id = STORENAME,
        this.staff.role = ROLE,
        console.log(this.staff);
       if(await this.staff_service.addStaff(this.staff)){
         this.changeDisplay();
         this.data = await this.staff_service.getListStaff();
         this.source.load(this.data);
       }
        
      }
      
    
  }


  
 
  async onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      
      if(await this.staff_service.removeUser(event.data.id) === "Remove Staff successful"){
        event.confirm.resolve();
      }
      
    } else {
      event.confirm.reject();
    }
  }
}
