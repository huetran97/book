import { Component } from '@angular/core';
import { StaffService } from '../../../@core/data/staff.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharemodelService } from '../../../@core/data/sharemodel.service';

export class Date{
  year: Number
  month:Number
  day:Number
}


export class Staff{
  id: String
  user_name: String
  email: String
  date_of_birth: Date
  sex: String
  id_card_number: String
  id_card_number_date: Date
  id_card_number_location: String
  tax_number: String
  insurrance_number: String
  start_work_date: Date
  end_work_date: Date
  name: String
  phone_number: String
  store: String
  is_active: Boolean
  staff: String
  role: String
  address: String
  last_login: Date
}
  

@Component({
  selector: 'ngx-modal',
  templateUrl: './modal.component.html',
  styles:[
  ""
  ]

})
export class ModalComponent {
  message:String;
  modalHeader: string;
  staff:any;
  staff_edit: any;
  staff_add: {
    id:"",
    name : "your name",
    user_name: "",
    email: "your_email",
    date_of_birth: {
    year: 2018,
      month: 3,
      day:20

    };
    sex: "Nam"
    id_card_number: "Your id card"
    
    id_card_number_location: "Your id card"
    tax_number: "Your id card"
    insurrance_number: "Your id card"
    phone_number: "Your id card"
    store: "Your id card"
    
    staff: "Your id card"
    role: "Your id card"
    address: "Your id card"
    
  };

  constructor(private activeModal: NgbActiveModal,
              private data : SharemodelService,
              private staff_service: StaffService) {
   }
   ngOnInit(){
 
    this.data.currentMessage.subscribe(message => this.message = message);
    this.data.staffEdit.subscribe(message => this.staff = message);
    if(this.message==='edit')
    {
        this.staff_edit = this.staff;
        console.log(this.staff);
        console.log();
    }
    else{
        this.staff_edit = {
          id:"",
      name : "",
      user_name: "",
      email: "",
      date_of_birth: {
      year: 2018,
        month: 3,
        day:20
  
      },
      sex: "Nam",
      id_card_number: "",
      
      id_card_number_location: "",
      tax_number: "",
      insurrance_number: "",
      phone_number: "",
      store: "",
      id_card_number_date: {
        year: 2018,
          month: 3,
          day:20
    
        },
      staff: "",
      role: "",
      address: "",
        }
    }
    
   }
  closeModal() {
    this.activeModal.close();
  }
 async onClick(){
    if(this.message === 'edit'){
      this.staff_edit.date_of_birth=Number(this.staff.date_of_birth.year.toString()+this.staff.date_of_birth.month.toString()+this.staff.date_of_birth.day.toString());
      this.staff_edit.id_card_number_date=Number(this.staff.id_card_number_date.year.toString()+this.staff.id_card_number_date.month.toString()+this.staff.id_card_number_date.day.toString());
     if(await this.staff_service.editStaff(this.staff_edit)){
       this.closeModal();
     }
     
    }
  }
  
}
