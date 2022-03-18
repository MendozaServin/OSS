import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListGarajePageRoutingModule } from './list-garaje-routing.module';

import { ListGarajePage } from './list-garaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListGarajePageRoutingModule
  ],
  declarations: [ListGarajePage]
})
export class ListGarajePageModule {}
