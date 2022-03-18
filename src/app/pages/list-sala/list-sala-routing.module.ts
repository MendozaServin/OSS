import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSalaPage } from './list-sala.page';

const routes: Routes = [
  {
    path: '',
    component: ListSalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSalaPageRoutingModule {}
