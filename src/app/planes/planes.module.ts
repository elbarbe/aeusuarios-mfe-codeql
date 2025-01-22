import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { PlanesRoutingModule } from './planes-routing.module';
import { PlanesSIUuDelPlanComponent } from './siu_delplan.component';
import { PlanesPIUuPlanComponent } from './piu_plan.component';
import { PlanesPIUuPlanesuObsComponent } from './piu_planes_obs.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    PlanesRoutingModule
  ],
  declarations: [
    PlanesSIUuDelPlanComponent,
    PlanesPIUuPlanComponent,
    PlanesPIUuPlanesuObsComponent
  ],
  exports: [
    PlanesSIUuDelPlanComponent,
    PlanesPIUuPlanComponent,
    PlanesPIUuPlanesuObsComponent
  ]
})
export class PlanesModule { }
