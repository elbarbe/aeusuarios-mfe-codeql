import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { RegionalPIUuRegionaluObsComponent } from './piu_regional_obs.component';

const routes: Routes = [
    { path: 'piu_regional_obs' , component: RegionalPIUuRegionaluObsComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionalRoutingModule { }
