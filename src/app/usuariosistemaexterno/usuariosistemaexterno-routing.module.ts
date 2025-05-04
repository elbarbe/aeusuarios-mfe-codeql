import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { UsuarioSistemaExternoSIUucrearComponent } from './siu_crear.component';
import { UsuarioSistemaExternoSIUumodificarComponent } from './siu_modificar.component';
import { UsuarioSistemaExternoSIUusetPasswordComponent } from './siu_setpassword.component';
import { UsuarioSistemaExternoPIUuUsuarioSistemaExternoComponent } from './piu_usuariosistemaexterno.component';

const routes: Routes = [
    { path: 'siu_crear' , component: UsuarioSistemaExternoSIUucrearComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificar' , component: UsuarioSistemaExternoSIUumodificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_setpassword' , component: UsuarioSistemaExternoSIUusetPasswordComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_usuariosistemaexterno' , component: UsuarioSistemaExternoPIUuUsuarioSistemaExternoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioSistemaExternoRoutingModule { }
