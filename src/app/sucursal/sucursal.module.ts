import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { SucursalRoutingModule } from './sucursal-routing.module';
import { SucursalPIUuSucursaluObsComponent } from './piu_sucursal_obs.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    SucursalRoutingModule
  ],
  declarations: [
    SucursalPIUuSucursaluObsComponent
  ],
  exports: [
    SucursalPIUuSucursaluObsComponent
  ]
})
export class SucursalModule { }
