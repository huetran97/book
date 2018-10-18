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
                  domain_knowledge: {
                    title: 'Ngôn ngữ',
                    type: 'html',
                    editor: {
                      type: 'list',
                      config: {
                        list: [{ value: '5bb70f9a521813000f2f2b31', title: 'Tiếng Anh' }, { value: '5bb70f50521813000f2f2b30', title: 'Tiếng Việt' }]
                      }
                    },
                    valuePrepareFunction: (language) => { 
                      if(language.language.name === 'English'){
                        return language.language.name = 'Tiếng Anh';
                      }
                      return language.language.name;
                     },
                    filter: true,
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
      console.log(data)
    if( await this.subject_service.updateSubject(data)){

      // event.confirm.resolve(event.newData);
      const datax =await this.subject_service.getSubjectbyDomain(data.domain_knowledge) ;
      this.data = datax;
      this.source.load(this.data);
    }
      
    } else {
      event.confirm.reject();
    }
  }
}
