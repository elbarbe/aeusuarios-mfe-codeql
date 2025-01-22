import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { PlanesSIUuDelPlanComponent } from './siu_delplan.component';
import { PlanesPIUuPlanComponent } from './piu_plan.component';
import { PlanesPIUuPlanesuObsComponent } from './piu_planes_obs.component';

const routes: Routes = [
    { path: 'siu_delplan' , component: PlanesSIUuDelPlanComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_plan' , component: PlanesPIUuPlanComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_planes_obs' , component: PlanesPIUuPlanesuObsComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanesRoutingModule { }
