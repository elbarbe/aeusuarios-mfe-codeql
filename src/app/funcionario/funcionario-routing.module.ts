import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { FuncionarioSIUuTCAMBIARDISPONIBLEComponent } from './siu_tcambiardisponible.component';
import { FuncionarioPIUuUsuariosComponent } from './piu_usuarios.component';
import { FuncionarioPIUuFuncionariouObsComponent } from './piu_funcionario_obs.component';

const routes: Routes = [
    { path: 'siu_tcambiardisponible' , component: FuncionarioSIUuTCAMBIARDISPONIBLEComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_usuarios' , component: FuncionarioPIUuUsuariosComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_funcionario_obs' , component: FuncionarioPIUuFuncionariouObsComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
