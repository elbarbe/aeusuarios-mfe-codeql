import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { GSSIUuTCREARAGENTEComponent } from './siu_tcrearagente.component';
import { GSSIUuTMODIFICARAGENTEComponent } from './siu_tmodificaragente.component';
import { GSSIUuTGNEWASESORAGENCIAComponent } from './siu_tgnewasesoragencia.component';
import { GSSIUuTGMODASESORAGENCIAComponent } from './siu_tgmodasesoragencia.component';

const routes: Routes = [
    { path: 'siu_tcrearagente' , component: GSSIUuTCREARAGENTEComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificaragente' , component: GSSIUuTMODIFICARAGENTEComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tgnewasesoragencia' , component: GSSIUuTGNEWASESORAGENCIAComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tgmodasesoragencia' , component: GSSIUuTGMODASESORAGENCIAComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalServicesRoutingModule { }
