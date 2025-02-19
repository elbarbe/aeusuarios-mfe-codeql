import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { UsuarioSistemaExternoRoutingModule } from './usuariosistemaexterno-routing.module';
import { UsuarioSistemaExternoSIUucrearComponent } from './siu_crear.component';
import { UsuarioSistemaExternoSIUumodificarComponent } from './siu_modificar.component';
import { UsuarioSistemaExternoSIUusetPasswordComponent } from './siu_setpassword.component';
import { UsuarioSistemaExternoPIUuUsuarioSistemaExternoComponent } from './piu_usuariosistemaexterno.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    UsuarioSistemaExternoRoutingModule
  ],
  declarations: [
    UsuarioSistemaExternoSIUucrearComponent,
    UsuarioSistemaExternoSIUumodificarComponent,
    UsuarioSistemaExternoSIUusetPasswordComponent,
    UsuarioSistemaExternoPIUuUsuarioSistemaExternoComponent
  ],
  exports: [
    UsuarioSistemaExternoSIUucrearComponent,
    UsuarioSistemaExternoSIUumodificarComponent,
    UsuarioSistemaExternoSIUusetPasswordComponent,
    UsuarioSistemaExternoPIUuUsuarioSistemaExternoComponent
  ]
})
export class UsuarioSistemaExternoModule { }
