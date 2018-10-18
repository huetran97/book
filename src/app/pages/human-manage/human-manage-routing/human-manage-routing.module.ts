import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { HumanManageComponent } from '../human-manage.component';
import { UserManageComponent } from '../user-manage/user-manage.component';
import { StaffManageComponent } from '../staff-manage/staff-manage.component';
const routes: Routes =[{
  path:'',
  component: HumanManageComponent,
  children: [
    {
      path: 'user-manage',
      component:UserManageComponent
    },
    {
      path:'staff-manage',
      component:StaffManageComponent
    }
  ]
}] 

@NgModule({
  imports: [
 
    RouterModule.forChild(routes)
  ],
  entryComponents:[
        
  ],
  exports: [RouterModule],
})
export class HumanManageRoutingModule { }
export const routedComponent = [
  UserManageComponent,
  StaffManageComponent,
]