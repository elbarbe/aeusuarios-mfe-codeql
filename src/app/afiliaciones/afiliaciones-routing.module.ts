import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { AfiliacionesSIUuInsPlanComponent } from './siu_insplan.component';
import { AfiliacionesMDIUuAfiliacionesPlanesComponent } from './mdiu_afiliacionesplanes.component';
import { AfiliacionesPIUuAfiliacionesComponent } from './piu_afiliaciones.component';
import { AfiliacionesPIUuAfiliacionesuNullComponent } from './piu_afiliaciones_null.component';

const routes: Routes = [
    { path: 'siu_insplan' , component: AfiliacionesSIUuInsPlanComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_afiliacionesplanes' , component: AfiliacionesMDIUuAfiliacionesPlanesComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_afiliaciones' , component: AfiliacionesPIUuAfiliacionesComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_afiliaciones_null' , component: AfiliacionesPIUuAfiliacionesuNullComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfiliacionesRoutingModule { }
