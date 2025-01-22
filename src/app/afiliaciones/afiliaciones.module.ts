import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { AfiliacionesRoutingModule } from './afiliaciones-routing.module';
import { AfiliacionesSIUuInsPlanComponent } from './siu_insplan.component';
import { AfiliacionesMDIUuAfiliacionesPlanesComponent } from './mdiu_afiliacionesplanes.component';
import { AfiliacionesPIUuAfiliacionesComponent } from './piu_afiliaciones.component';
import { AfiliacionesPIUuAfiliacionesuNullComponent } from './piu_afiliaciones_null.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    AfiliacionesRoutingModule
  ],
  declarations: [
    AfiliacionesSIUuInsPlanComponent,
    AfiliacionesMDIUuAfiliacionesPlanesComponent,
    AfiliacionesPIUuAfiliacionesComponent,
    AfiliacionesPIUuAfiliacionesuNullComponent
  ],
  exports: [
    AfiliacionesSIUuInsPlanComponent,
    AfiliacionesMDIUuAfiliacionesPlanesComponent,
    AfiliacionesPIUuAfiliacionesComponent,
    AfiliacionesPIUuAfiliacionesuNullComponent
  ]
})
export class AfiliacionesModule { }
