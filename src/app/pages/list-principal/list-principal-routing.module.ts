import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPrincipalPage } from './list-principal.page';

const routes: Routes = [
  {
    path: '',
    component: ListPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPrincipalPageRoutingModule {}
