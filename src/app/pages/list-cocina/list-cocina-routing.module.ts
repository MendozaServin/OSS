import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCocinaPage } from './list-cocina.page';

const routes: Routes = [
  {
    path: '',
    component: ListCocinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCocinaPageRoutingModule {}
