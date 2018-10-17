import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeModule} from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {routedComponent, ProductManageRoutingModule} from '../product-manage/product-manage-routing/product-manage-routing.module';
import { ProductManageComponent } from './product-manage.component';
import { ButtonViewComponent } from './domain-knowledge/domain-knowledge.component';
import { SubjectManageComponent } from './subject-manage/subject-manage.component';
@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    Ng2SmartTableModule,
    ProductManageRoutingModule

  ],
  declarations: [
    routedComponent,
    ProductManageComponent,
    ButtonViewComponent,
    SubjectManageComponent
  ],
entryComponents:[
  ButtonViewComponent
]
  
})
export class ProductManageModule { }
