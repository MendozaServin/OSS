import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPrincipalPageRoutingModule } from './list-principal-routing.module';

import { ListPrincipalPage } from './list-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPrincipalPageRoutingModule
  ],
  declarations: [ListPrincipalPage]
})
export class ListPrincipalPageModule {}
