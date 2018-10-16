import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { LocalDataSource,ViewCell } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import { async } from 'q';
import { StaffService } from '../../../@core/data/staff.service';







@Component({
    selector: 'ngx-tab5',
    template: `
    <nb-card>
    <nb-card-header>
      Staff List
    </nb-card-header>
  
    <nb-card-body>
      <ng2-smart-table 
      [settings]="settings" 
      [source]="source" 
      (deleteConfirm)="onDeleteConfirm($event)"
      (editConfirm)=" onSaveConfirm($event)"
      (createConfirm)="onCreateConfirm($event)"
  
  >
      </ng2-smart-table>
    </nb-card-body>
  </nb-card>
  
    `,
  })
  export class Tab5Component { 
    data;
    source: LocalDataSource = new LocalDataSource();
    constructor(private service: SmartTableService,
                private staff_service: StaffService) {
    
    }
  
   async ngOnInit() {
  
    const data = await this.staff_service.getListStaff("5bb82d23521813000f2f2b54");
    this.data =data;
    this.source.load(this.data);     
    }
  
    settings = {
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmCreate:true
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmSave: true,
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
        user_name: {
          title: 'User Name',
          type: 'string',
        },
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
      },
    };
   async onSaveConfirm(event) {
      if (window.confirm('Are you sure you want to save?')) {
        var data = {
          "name": event.newData.name,
          "email": event.newData.email,
          "phone_number": event.newData.phone_number,
          "address":event.newData.address
        };
      if( await this.service.updateUser(event.data.id,data)){
        event.confirm.resolve(event.newData);
      }
        
      } else {
        event.confirm.reject();
      }
    }
  
   async onCreateConfirm(event) {
      if (window.confirm('Are you sure you want to create?')) {
        var data = {
          "name": event.newData.name,
          "email": event.newData.email,
          "phone_number": event.newData.phone_number,
          "address":event.newData.address,
          "user_name":event.newData.user_name,
        };
      if( await this.service.addUser(data)){
        event.confirm.resolve(event.newData);
      }
        
      } else {
        event.confirm.reject();
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
  
  
  