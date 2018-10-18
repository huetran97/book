import { Component, OnInit,Input } from '@angular/core';
import { SharemodelService } from '../../../@core/data/sharemodel.service';
import { DomainKnowledgeService } from '../../../@core/data/domain-knowledge.service';
import { SubjectManageService } from '../../../@core/data/subject-manage.service';
import { LocalDataSource ,ViewCell} from 'ng2-smart-table';

@Component({
  selector: 'ngx-subject-manage',
  templateUrl: './subject-manage.component.html',
  styleUrls: ['./subject-manage.component.scss']
})
export class SubjectManageComponent implements OnInit {
  data;
  domain_list;
  subject_list;
  domain_current;
  source: LocalDataSource = new LocalDataSource();
  constructor(private domain_service: DomainKnowledgeService,
              private subject_service: SubjectManageService) { }
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
                    title: 'Tên Thể Loại',
                    type: 'string',
                  },
                  
                },
                
              };
async  ngOnInit() {
    this.domain_list = await this.domain_service.getListDomainKnowledge();
  }
async  displaySubject(domain){
  var subject: any[];
  this.subject_list = await this.subject_service.getSubjectbyDomain(domain);
  this.source.load(this.subject_list);
  console.log(this.subject_list); 
  this.domain_current =domain;
  }


  async onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      if(await this.subject_service.deleteSubject(event.data.id) === "Remove Subject successful"){
        event.confirm.resolve();
      }
      
    } else {
      event.confirm.reject();
    }
  }

  async onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      var data = {
        id: event.data.id,
        name: event.newData.name,
        domain_knowledge : event.data.domain_knowledge.id
      };
    if( await this.subject_service.updateSubject(data)){

      const datax =await this.subject_service.getSubjectbyDomain(data.domain_knowledge) ;
      this.data = datax;
      this.source.load(this.data);
      // event.confirm.resolve(event.newData);

    }
      
    } else {
      event.confirm.reject();
    }
  }
  async onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      
      var data = {
        name: event.newData.name,
        domain_knowledge : this.domain_current
      };
    if(await this.subject_service.addSubject(data)){
      const datax =await this.subject_service.getSubjectbyDomain(data.domain_knowledge) ;
      this.data = datax;
      this.source.load(this.data);
      event.confirm.resolve(event.newData);

    }
      
    } else {
      event.confirm.reject();
    }
  }
}
