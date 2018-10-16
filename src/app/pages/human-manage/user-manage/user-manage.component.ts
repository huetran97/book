import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';



@Component({
  selector: 'ngx-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {
  data;
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableService) {
  
  }

 async ngOnInit() {
  const data =await this.service.getListUser();
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
      
      if(await this.service.removeUser(event.data.id) === "Remove user successful"){
        event.confirm.resolve();
      }
      
    } else {
      event.confirm.reject();
    }
  }
}
