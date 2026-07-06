import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { GlobalServicesRoutingModule } from './globalservices-routing.module';
import { GSSIUuOGSINCASESORESComponent } from './siu_ogsincasesores.component';
import { GSSIUuOGSINCASESORESuOutComponent } from './siu_ogsincasesores_out.component';
import { GSSIUuTCREARAGENTEComponent } from './siu_tcrearagente.component';
import { GSSIUuTMODIFICARAGENTEComponent } from './siu_tmodificaragente.component';
import { GSSIUuTGNEWASESORAGENCIAComponent } from './siu_tgnewasesoragencia.component';
import { GSSIUuTGMODASESORAGENCIAComponent } from './siu_tgmodasesoragencia.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    GlobalServicesRoutingModule
  ],
  declarations: [
    GSSIUuOGSINCASESORESComponent,
    GSSIUuOGSINCASESORESuOutComponent,
    GSSIUuTCREARAGENTEComponent,
    GSSIUuTMODIFICARAGENTEComponent,
    GSSIUuTGNEWASESORAGENCIAComponent,
    GSSIUuTGMODASESORAGENCIAComponent
  ],
  exports: [
    GSSIUuOGSINCASESORESComponent,
    GSSIUuOGSINCASESORESuOutComponent,
    GSSIUuTCREARAGENTEComponent,
    GSSIUuTMODIFICARAGENTEComponent,
    GSSIUuTGNEWASESORAGENCIAComponent,
    GSSIUuTGMODASESORAGENCIAComponent
  ]
})
export class GlobalServicesModule { }
