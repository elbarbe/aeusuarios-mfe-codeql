import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { LogHistoricoPlanesPIUuLogHistoricoPlanesComponent } from './piu_loghistoricoplanes.component';

const routes: Routes = [
    { path: 'piu_loghistoricoplanes' , component: LogHistoricoPlanesPIUuLogHistoricoPlanesComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogHistoricoPlanesRoutingModule { }
