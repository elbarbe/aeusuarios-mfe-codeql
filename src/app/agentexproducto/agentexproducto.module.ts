import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { AgentexProductoRoutingModule } from './agentexproducto-routing.module';
import { AgentexProductoSIUuTCREARComponent } from './siu_tcrear.component';
import { AgentexProductoSIUuTADDDOMINIOComponent } from './siu_tadddominio.component';
import { AgentexProductoSIUuTDELDOMINIOComponent } from './siu_tdeldominio.component';
import { AgentexProductoMDIUuAgentexProductoComponent } from './mdiu_agentexproducto.component';
import { AgentexProductoPIUuAgentexProductoComponent } from './piu_agentexproducto.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    AgentexProductoRoutingModule
  ],
  declarations: [
    AgentexProductoSIUuTCREARComponent,
    AgentexProductoSIUuTADDDOMINIOComponent,
    AgentexProductoSIUuTDELDOMINIOComponent,
    AgentexProductoMDIUuAgentexProductoComponent,
    AgentexProductoPIUuAgentexProductoComponent
  ],
  exports: [
    AgentexProductoSIUuTCREARComponent,
    AgentexProductoSIUuTADDDOMINIOComponent,
    AgentexProductoSIUuTDELDOMINIOComponent,
    AgentexProductoMDIUuAgentexProductoComponent,
    AgentexProductoPIUuAgentexProductoComponent
  ]
})
export class AgentexProductoModule { }
