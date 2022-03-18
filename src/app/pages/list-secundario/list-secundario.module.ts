import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSecundarioPageRoutingModule } from './list-secundario-routing.module';

import { ListSecundarioPage } from './list-secundario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSecundarioPageRoutingModule
  ],
  declarations: [ListSecundarioPage]
})
export class ListSecundarioPageModule {}
