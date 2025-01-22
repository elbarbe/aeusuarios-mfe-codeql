import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { MesaDeApoyoPIUuMesaDeApoyoComponent } from './piu_mesadeapoyo.component';

const routes: Routes = [
    { path: 'piu_mesadeapoyo' , component: MesaDeApoyoPIUuMesaDeApoyoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesaDeApoyoRoutingModule { }
