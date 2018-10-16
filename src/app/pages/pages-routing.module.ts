import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { HumanManageComponent } from './human-manage/human-manage.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [

    {
      path:'human-manage',
      loadChildren: './human-manage/human-manage.module#HumanManageModule',
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
