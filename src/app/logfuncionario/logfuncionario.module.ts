import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { LogFuncionarioRoutingModule } from './logfuncionario-routing.module';
import { LogFuncionarioPIUuLogFuncionarioComponent } from './piu_logfuncionario.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LogFuncionarioRoutingModule
  ],
  declarations: [
    LogFuncionarioPIUuLogFuncionarioComponent
  ],
  exports: [
    LogFuncionarioPIUuLogFuncionarioComponent
  ]
})
export class LogFuncionarioModule { }
