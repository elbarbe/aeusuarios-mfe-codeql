import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { LogHistoricoPlanesRoutingModule } from './loghistoricoplanes-routing.module';
import { LogHistoricoPlanesPIUuLogHistoricoPlanesComponent } from './piu_loghistoricoplanes.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LogHistoricoPlanesRoutingModule
  ],
  declarations: [
    LogHistoricoPlanesPIUuLogHistoricoPlanesComponent
  ],
  exports: [
    LogHistoricoPlanesPIUuLogHistoricoPlanesComponent
  ]
})
export class LogHistoricoPlanesModule { }
