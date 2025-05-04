import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioSIUuTCAMBIARDISPONIBLEComponent } from './siu_tcambiardisponible.component';
import { FuncionarioPIUuUsuariosComponent } from './piu_usuarios.component';
import { FuncionarioPIUuFuncionariouObsComponent } from './piu_funcionario_obs.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    FuncionarioRoutingModule
  ],
  declarations: [
    FuncionarioSIUuTCAMBIARDISPONIBLEComponent,
    FuncionarioPIUuUsuariosComponent,
    FuncionarioPIUuFuncionariouObsComponent
  ],
  exports: [
    FuncionarioSIUuTCAMBIARDISPONIBLEComponent,
    FuncionarioPIUuUsuariosComponent,
    FuncionarioPIUuFuncionariouObsComponent
  ]
})
export class FuncionarioModule { }
