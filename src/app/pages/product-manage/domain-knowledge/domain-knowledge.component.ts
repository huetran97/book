import { Component, OnInit } from '@angular/core';
import { LocalDataSource ,ViewCell} from 'ng2-smart-table';
import { DomainKnowledgeService } from '../../../@core/data/domain-knowledge.service';
import {  Input, Output, EventEmitter } from '@angular/core';
import { SharemodelService } from '../../../@core/data/sharemodel.service';

@Component({
  selector: 'button-view',
  template: `
    <button class="btn btn-hero-secondary btn-demo" (click)="onClick()"><i class="ion-information"></i></button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();
  constructor(
    private service_shared: SharemodelService) {

}
  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
    // console.log(this.rowData);
    let data = this.rowData;
    // console.log(data);
 this.service_shared.changeStaff(this.rowData);
  }
}

@Component({
  selector: 'ngx-domain-knowledge',
  templateUrl: './domain-knowledge.component.html',
  styleUrls: ['./domain-knowledge.component.scss']
})
export class DomainKnowledgeComponent implements OnInit {
  row_data;
  data;
  source: LocalDataSource = new LocalDataSource();
  constructor( private service: DomainKnowledgeService,
              private service_shared: SharemodelService) {
  
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
        title: 'Tên danh mục',
        type: 'string',
      },
      language: {
        title: 'Ngôn ngữ',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: '5bb70f9a521813000f2f2b31', title: 'Tiếng Anh' }, { value: '5bb70f50521813000f2f2b30', title: 'Tiếng Việt' }]
          }
        },
        valuePrepareFunction: (language) => { 
          if(language.name === 'English'){
            return language.name = 'Tiếng Anh';
          }
          return language.name;
         },
        filter: true,
      },
      button: {
        filter:false,
        title: 'Button',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            // alert(`${row.name} saved!`);


          });
        }
      },

    },
    
  };
 async ngOnInit() {
  const data =await this.service.getListDomainKnowledge() ;
  this.data =data;
   this.source.load(this.data);
   
  }
  async onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      var data = {
        id: event.newData.id,
        name: event.newData.name,
        language : event.newData.language
      };
      // console.log(data)
    if( await this.service.updateDomainKnowledge(data)){

      // event.confirm.resolve(event.newData);
      const data =await this.service.getListDomainKnowledge() ;
      this.data =data;
      this.source.load(this.data);
    }
      
    } else {
      event.confirm.reject();
    }
  }
  async onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      
      if(await this.service.removeDomainKnowledge(event.data.id) === "Remove Domain Knowledge successful"){
        event.confirm.resolve();
      }
      
    } else {
      event.confirm.reject();
    }
  }
  async onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
     
    if( await this.service.addDomainKnowledge(event.newData)){
      event.confirm.resolve(event.newData);
      const data =await this.service.getListDomainKnowledge() ;
      this.data =data;
      this.source.load(this.data);
    }
      
    } else {
      event.confirm.reject();
    }
  }




  }

