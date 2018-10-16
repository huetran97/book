import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharemodelService {
  staff = {
    id:'',
    name:'',
  }
  private messageSource = new BehaviorSubject('default message');
  private dataStaffEdit = new BehaviorSubject(this.staff);

  currentMessage = this.messageSource.asObservable();
  staffEdit = this.dataStaffEdit.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  changeStaff(staffedit: any){
    this.dataStaffEdit.next(staffedit);
  }
}

