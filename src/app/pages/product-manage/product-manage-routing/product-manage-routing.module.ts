import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { DomainKnowledgeComponent } from '../domain-knowledge/domain-knowledge.component';
import { BookManageComponent } from '../book-manage/book-manage.component';
import { ProductManageComponent } from '../product-manage.component';



const routes: Routes =[{
  path:'',
  component: ProductManageComponent,
  children: [
    {
      path: 'domain-knowledge',
      component:DomainKnowledgeComponent
    },
    {
      path:'book-manage',
      component:BookManageComponent
    }
  ]
}] 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [],
  exports: [RouterModule],
 

})
export class ProductManageRoutingModule { }
export const routedComponent = [
  BookManageComponent,
  DomainKnowledgeComponent,
]