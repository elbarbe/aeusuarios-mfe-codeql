import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { MesaDeApoyoRoutingModule } from './mesadeapoyo-routing.module';
import { MesaDeApoyoPIUuMesaDeApoyoComponent } from './piu_mesadeapoyo.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    MesaDeApoyoRoutingModule
  ],
  declarations: [
    MesaDeApoyoPIUuMesaDeApoyoComponent
  ],
  exports: [
    MesaDeApoyoPIUuMesaDeApoyoComponent
  ]
})
export class MesaDeApoyoModule { }
