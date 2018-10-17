import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }
  number_to_date(date:any){ // number to object
    var daTe :any = {}
    daTe.day = date%100;
    daTe.month = (date%10000 - date%100)/100;
    daTe.year = (date - date%10000)/10000;
    return daTe;
 }

  date_to_number(date: any={}){ //object to number
   let daTe:any = {};
   if(date.month<10){
     daTe.month = '0'+date.month.toString();
   }else{
     daTe.month = date.month.toString();
   }
   if(date.day<10){
     daTe.day = '0'+date.day.toString();
   }else{
     daTe.day = date.day.toString();
   }
   daTe.year = date.year.toString();
   return Number(daTe.year+daTe.month+daTe.day);

  }
}
