import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManageComponent } from './user-manage/user-manage.component';
import { StaffManageComponent } from './staff-manage/staff-manage.component';
import {ThemeModule} from '../../@theme/theme.module';
import { HumanManageRoutingModule, routedComponent  } from './human-manage-routing/human-manage-routing.module';
import { HumanManageComponent } from './human-manage.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    HumanManageRoutingModule,
    Ng2SmartTableModule,

  ],
  declarations: [
    routedComponent,
    HumanManageComponent,
    
  ],
  
})
export class HumanManageModule { }
