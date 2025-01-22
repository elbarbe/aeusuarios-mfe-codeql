import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { LogFuncionarioPIUuLogFuncionarioComponent } from './piu_logfuncionario.component';

const routes: Routes = [
    { path: 'piu_logfuncionario' , component: LogFuncionarioPIUuLogFuncionarioComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogFuncionarioRoutingModule { }
