import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { GlobalServicesRoutingModule } from './globalservices-routing.module';
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
    GSSIUuTCREARAGENTEComponent,
    GSSIUuTMODIFICARAGENTEComponent,
    GSSIUuTGNEWASESORAGENCIAComponent,
    GSSIUuTGMODASESORAGENCIAComponent
  ],
  exports: [
    GSSIUuTCREARAGENTEComponent,
    GSSIUuTMODIFICARAGENTEComponent,
    GSSIUuTGNEWASESORAGENCIAComponent,
    GSSIUuTGMODASESORAGENCIAComponent
  ]
})
export class GlobalServicesModule { }
