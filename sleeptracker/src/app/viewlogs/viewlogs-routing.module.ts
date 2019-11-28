import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewlogsPage } from './viewlogs.page';

const routes: Routes = [
  {
    path: '',
    component: ViewlogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewlogsPageRoutingModule {}
