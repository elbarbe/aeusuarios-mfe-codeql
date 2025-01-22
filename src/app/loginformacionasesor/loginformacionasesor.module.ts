import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { LogInformacionAsesorRoutingModule } from './loginformacionasesor-routing.module';
import { LogInformacionAsesorPIUuLogInformacionAsesorComponent } from './piu_loginformacionasesor.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LogInformacionAsesorRoutingModule
  ],
  declarations: [
    LogInformacionAsesorPIUuLogInformacionAsesorComponent
  ],
  exports: [
    LogInformacionAsesorPIUuLogInformacionAsesorComponent
  ]
})
export class LogInformacionAsesorModule { }
