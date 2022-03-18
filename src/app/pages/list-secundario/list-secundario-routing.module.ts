import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSecundarioPage } from './list-secundario.page';

const routes: Routes = [
  {
    path: '',
    component: ListSecundarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSecundarioPageRoutingModule {}
