import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListGarajePage } from './list-garaje.page';

const routes: Routes = [
  {
    path: '',
    component: ListGarajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListGarajePageRoutingModule {}
