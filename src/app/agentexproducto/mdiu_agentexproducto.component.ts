import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { AgentexProductoPIUuAgentexProductoComponent } from './piu_agentexproducto.component';
import { DominioPIUuDominiosPorAsesorComponent } from '../dominio/piu_dominiosporasesor.component';


@Component({
    selector: 'imes-agentexproducto-mdiu-agentexproducto',
    templateUrl: './mdiu_agentexproducto.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgentexProductoMDIUuAgentexProductoComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: AgentexProductoPIUuAgentexProductoComponent;

    /** Details */
    /** Detail component 0 */
    public d0: DominioPIUuDominiosPorAsesorComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param condNavMng Conditional manager
     */
    constructor(public override appGlobalInfo: AppGlobalInfo, public override util: Util,
                public override changeDetectorRef: ChangeDetectorRef,
                public langMng: LanguageMng, public stdFun: StandardFunctions,
                public condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.idXML = 'Clas_1460560723968553UIMaDet_1';
        this.className = ModelConstants.Agentexproducto.name;
        this.iuName = ModelConstants.Agentexproducto.mdiuuagentexproducto;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_AgentexProducto_mdiu_MDIU_AgentexProducto',
            'Productos del asesor');
        // Create the details and assign the master detail container
        this.master = new AgentexProductoPIUuAgentexProductoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1460560723968553UIMaDet_1Det_1',
            ['Admin', 'SuperAdmin']);
        this.d0 = new DominioPIUuDominiosPorAsesorComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng);
        this.d0.masterDetailContainer = this;
        if (this.d0Visible) {
            this.details.push(this.d0);
        }
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the master and details components
     */
    public override initializeComponents(): void {
        this.master.iuId = this.iuId + 'M';
        this.master.initializeComponents();
        // Subscribe to the selection changed event
        this.master.selectionChanged.subscribe(data => this.processMasterSelectionChanged());
        // Details
        if (this.d0Visible && this.d0 != null) {
            this.d0.order = 0;
            this.d0.iuId = this.iuId + 'D0';
            this.d0.initializeComponents();
            this.d0.title = this.langMng.translateText(
                'cls_AgentexProducto_mdiu_MDIU_AgentexProducto_detail_Clas_1460560723968553UIMaDet_1Det_1',
                'Dominios');
            this.d0.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('Dominio',
                this.master.getContext(), null, 'AgentexProducto', null, 'AgentexProducto', ''));
        }
        super.initializeComponents();
    }

}
