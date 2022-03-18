import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [LayoutComponent],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentModule { }
