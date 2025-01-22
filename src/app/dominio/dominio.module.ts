import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { DominioRoutingModule } from './dominio-routing.module';
import { DominioPIUuDominiouObsComponent } from './piu_dominio_obs.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    DominioRoutingModule
  ],
  declarations: [
    DominioPIUuDominiouObsComponent
  ],
  exports: [
    DominioPIUuDominiouObsComponent
  ]
})
export class DominioModule { }
