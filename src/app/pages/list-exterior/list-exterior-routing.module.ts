import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListExteriorPage } from './list-exterior.page';

const routes: Routes = [
  {
    path: '',
    component: ListExteriorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListExteriorPageRoutingModule {}
