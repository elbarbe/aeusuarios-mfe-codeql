import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { LogInformacionAsesorPIUuLogInformacionAsesorComponent } from './piu_loginformacionasesor.component';

const routes: Routes = [
    { path: 'piu_loginformacionasesor' , component: LogInformacionAsesorPIUuLogInformacionAsesorComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogInformacionAsesorRoutingModule { }
