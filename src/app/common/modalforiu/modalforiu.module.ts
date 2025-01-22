import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalForIUComponent } from './modalforiu.component';
import { DialogModule } from 'primeng/dialog';
import { CommonComponentsModule } from '../../commoncomponents.module';
import { GlobalServicesModule } from '../../globalservices/globalservices.module';
import { FuncionarioModule } from '../../funcionario/funcionario.module';
import { AsesorModule } from '../../asesor/asesor.module';
import { RolModule } from '../../rol/rol.module';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    DialogModule,
    GlobalServicesModule,
    FuncionarioModule,
    AsesorModule,
    RolModule
  ],
  declarations: [
    ModalForIUComponent
  ],
  exports: [ModalForIUComponent]
})
export class ModalForIUModule { }
