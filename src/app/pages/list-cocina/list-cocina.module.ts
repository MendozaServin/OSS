import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCocinaPageRoutingModule } from './list-cocina-routing.module';

import { ListCocinaPage } from './list-cocina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCocinaPageRoutingModule
  ],
  declarations: [ListCocinaPage]
})
export class ListCocinaPageModule {}
