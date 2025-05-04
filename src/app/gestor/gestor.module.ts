import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { GestorRoutingModule } from './gestor-routing.module';
import { GestorPIUuGestoresComponent } from './piu_gestores.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    GestorRoutingModule
  ],
  declarations: [
    GestorPIUuGestoresComponent
  ],
  exports: [
    GestorPIUuGestoresComponent
  ]
})
export class GestorModule { }
