import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_AgentexProducto of AgentexProducto »
 */
@Component({
    selector: 'imes-agentexproducto-piu-agentexproducto',
    templateUrl: './piu_agentexproducto.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgentexProductoPIUuAgentexProductoComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsproductotdcodigolegal = 'Producto';
    private readonly dsproductotddescripcion = 'Nombre';
    private readonly dsfechainicio = 'Fecha Inicio';
    private readonly dsfechafin = 'Fecha Fin';
    private readonly dstodosdominios = 'Todos Dominios';

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param condNavMng Conditional manager
     */
    constructor(
        public override appGlobalInfo: AppGlobalInfo, public override util: Util, public override changeDetectorRef: ChangeDetectorRef,
        public override langMng: LanguageMng, public stdFun: StandardFunctions,
        public override condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef, langMng, condNavMng);
        this.idXML = 'Clas_1460560723968553UIPobCl_1';
        this.className = ModelConstants.Agentexproducto.name;
        this.classAlias = this.langMng.translateText('cls_AgentexProducto',
            'Agente x Producto');
        this.supplementaryInfoAtt.push('asesor.drvnombrecompleto');
        this.supplementaryInfoAtt.push('productot.descripcion');
        this.iuName = ModelConstants.Agentexproducto.piuuagentexproducto;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_AgentexProducto_piu_PIU_AgentexProducto',
            'Productos del asesor');
        this.queryURL = '/api/AgentexProductoApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * It is the main component. Process the initial actions
     */
    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1460560723968553CjtoVis_2ICtjoVis_2';
        dsItem.name = 'productot.codigolegal';
        dsItem.field = 'productot-codigolegal';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_AgentexProducto_ds_DS_AgentexProductoPIU_item_Clas_1460560723968553CjtoVis_2ICtjoVis_2',
            this.dsproductotdcodigolegal);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1460560723968553CjtoVis_2ICtjoVis_3';
        dsItem.name = 'productot.descripcion';
        dsItem.field = 'productot-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_AgentexProducto_ds_DS_AgentexProductoPIU_item_Clas_1460560723968553CjtoVis_2ICtjoVis_3',
            this.dsproductotddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1460560723968553CjtoVis_2ICtjoVis_4';
        dsItem.name = 'fechainicio';
        dsItem.field = 'fechainicio';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_AgentexProducto_ds_DS_AgentexProductoPIU_item_Clas_1460560723968553CjtoVis_2ICtjoVis_4',
            this.dsfechainicio);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1460560723968553CjtoVis_2ICtjoVis_5';
        dsItem.name = 'fechafin';
        dsItem.field = 'fechafin';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_AgentexProducto_ds_DS_AgentexProductoPIU_item_Clas_1460560723968553CjtoVis_2ICtjoVis_5',
            this.dsfechafin);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1460560723968553CjtoVis_2ICtjoVis_6';
        dsItem.name = 'todosdominios';
        dsItem.field = 'todosdominios';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_AgentexProducto_ds_DS_AgentexProductoPIU_item_Clas_1460560723968553CjtoVis_2ICtjoVis_6',
            this.dstodosdominios);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1460560723968553AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_AgentexProducto_act_A_AgentexProducto_PIU_item_Clas_1460560723968553AccOfer_1ElemAcc_3',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Agentexproducto.name;
        accItem.targetUI = ModelConstants.Agentexproducto.siuutcrear;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1460560723968553AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_AgentexProducto_act_A_AgentexProducto_PIU_item_Clas_1460560723968553AccOfer_1ElemAcc_2',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Agentexproducto.name;
        accItem.targetUI = ModelConstants.Agentexproducto.siuueliminar;

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
