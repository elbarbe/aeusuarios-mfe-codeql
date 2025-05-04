import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { DominioPIUuDominiouObsComponent } from './piu_dominio_obs.component';

const routes: Routes = [
    { path: 'piu_dominio_obs' , component: DominioPIUuDominiouObsComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DominioRoutingModule { }
