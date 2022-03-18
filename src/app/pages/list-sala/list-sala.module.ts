import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSalaPageRoutingModule } from './list-sala-routing.module';

import { ListSalaPage } from './list-sala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSalaPageRoutingModule
  ],
  declarations: [ListSalaPage]
})
export class ListSalaPageModule {}
