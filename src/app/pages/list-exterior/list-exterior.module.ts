import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListExteriorPageRoutingModule } from './list-exterior-routing.module';

import { ListExteriorPage } from './list-exterior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListExteriorPageRoutingModule
  ],
  declarations: [ListExteriorPage]
})
export class ListExteriorPageModule {}
