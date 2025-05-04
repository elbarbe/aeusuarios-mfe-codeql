import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { AsesorRoutingModule } from './asesor-routing.module';
import { AsesorSIUuTMODIFICARASESORComponent } from './siu_tmodificarasesor.component';
import { AsesorMDIUuDirectoresAsesoresComponent } from './mdiu_directoresasesores.component';
import { AsesorMDIUuAsesorProductosComponent } from './mdiu_asesorproductos.component';
import { AsesorPIUuAsesorComponent } from './piu_asesor.component';
import { AsesorPIUuAsesoresDeAgenciaComponent } from './piu_asesoresdeagencia.component';
import { AsesorPIUuAsesoruNullComponent } from './piu_asesor_null.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    AsesorRoutingModule
  ],
  declarations: [
    AsesorSIUuTMODIFICARASESORComponent,
    AsesorMDIUuDirectoresAsesoresComponent,
    AsesorMDIUuAsesorProductosComponent,
    AsesorPIUuAsesorComponent,
    AsesorPIUuAsesoresDeAgenciaComponent,
    AsesorPIUuAsesoruNullComponent
  ],
  exports: [
    AsesorSIUuTMODIFICARASESORComponent,
    AsesorMDIUuDirectoresAsesoresComponent,
    AsesorMDIUuAsesorProductosComponent,
    AsesorPIUuAsesorComponent,
    AsesorPIUuAsesoresDeAgenciaComponent,
    AsesorPIUuAsesoruNullComponent
  ]
})
export class AsesorModule { }
