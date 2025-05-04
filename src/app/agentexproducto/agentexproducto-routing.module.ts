import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { AgentexProductoSIUuTCREARComponent } from './siu_tcrear.component';
import { AgentexProductoSIUuTADDDOMINIOComponent } from './siu_tadddominio.component';
import { AgentexProductoSIUuTDELDOMINIOComponent } from './siu_tdeldominio.component';
import { AgentexProductoMDIUuAgentexProductoComponent } from './mdiu_agentexproducto.component';
import { AgentexProductoPIUuAgentexProductoComponent } from './piu_agentexproducto.component';

const routes: Routes = [
    { path: 'siu_tcrear' , component: AgentexProductoSIUuTCREARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tadddominio' , component: AgentexProductoSIUuTADDDOMINIOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tdeldominio' , component: AgentexProductoSIUuTDELDOMINIOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_agentexproducto' , component: AgentexProductoMDIUuAgentexProductoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_agentexproducto' , component: AgentexProductoPIUuAgentexProductoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentexProductoRoutingModule { }
