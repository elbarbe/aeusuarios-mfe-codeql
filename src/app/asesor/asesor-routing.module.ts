import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { AsesorSIUuTMODIFICARASESORComponent } from './siu_tmodificarasesor.component';
import { AsesorMDIUuDirectoresAsesoresComponent } from './mdiu_directoresasesores.component';
import { AsesorMDIUuAsesorProductosComponent } from './mdiu_asesorproductos.component';
import { AsesorPIUuAsesorComponent } from './piu_asesor.component';
import { AsesorPIUuAsesoresDeAgenciaComponent } from './piu_asesoresdeagencia.component';
import { AsesorPIUuAsesoruNullComponent } from './piu_asesor_null.component';

const routes: Routes = [
    { path: 'siu_tmodificarasesor' , component: AsesorSIUuTMODIFICARASESORComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_directoresasesores' , component: AsesorMDIUuDirectoresAsesoresComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_asesorproductos' , component: AsesorMDIUuAsesorProductosComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_asesor' , component: AsesorPIUuAsesorComponent, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_asesoresdeagencia' , component: AsesorPIUuAsesoresDeAgenciaComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_asesor_null' , component: AsesorPIUuAsesoruNullComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
