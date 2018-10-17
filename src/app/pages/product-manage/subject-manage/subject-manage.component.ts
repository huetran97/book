import { Component, OnInit,Input } from '@angular/core';
import { Subject } from 'rxjs';
import { SharemodelService } from '../../../@core/data/sharemodel.service';

@Component({
  selector: 'ngx-subject-manage',
  templateUrl: './subject-manage.component.html',
  styleUrls: ['./subject-manage.component.scss']
})
export class SubjectManageComponent implements OnInit {
  @Input() subject:any;

  constructor( private service_shared: SharemodelService) { }

  ngOnInit() {
    this.service_shared.subjectEdit.subscribe(
      (subject)=>{
        this.subject = subject;
      }
    )
    console.log(this.subject);
  }
  load(){}

}
