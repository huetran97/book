import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharemodelService {
  subject = {
    id:'',
    name:'',
    language:{
      id:'',
      name:''
    }
  }
  private messageSource = new BehaviorSubject('default message');
  private dataSubjectEdit = new BehaviorSubject(this.subject);

  currentMessage = this.messageSource.asObservable();
  subjectEdit = this.dataSubjectEdit.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  changeStaff(subjectedit: any){
    this.dataSubjectEdit.next(subjectedit);
  }
}

