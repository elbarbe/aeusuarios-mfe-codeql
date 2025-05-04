import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { RegionalRoutingModule } from './regional-routing.module';
import { RegionalPIUuRegionaluObsComponent } from './piu_regional_obs.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    RegionalRoutingModule
  ],
  declarations: [
    RegionalPIUuRegionaluObsComponent
  ],
  exports: [
    RegionalPIUuRegionaluObsComponent
  ]
})
export class RegionalModule { }
