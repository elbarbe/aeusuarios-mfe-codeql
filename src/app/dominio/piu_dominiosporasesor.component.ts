import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_DominiosPorAsesor of Dominio »
 */
export class DominioPIUuDominiosPorAsesorComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsplantdcodigolegal = 'Código Legal Plan';
    private readonly dsplantdnombre = 'Plan';

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
        this.idXML = 'Clas_1431701422080423UIPobCl_3';
        this.className = ModelConstants.Dominio.name;
        this.classAlias = this.langMng.translateText('cls_Dominio',
            'Dominio');
        this.supplementaryInfoAtt.push('productot.descripcion');
        this.supplementaryInfoAtt.push('plant.nombre');
        this.iuName = 'PIU_DominiosPorAsesor';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Dominio_piu_PIU_DominiosPorAsesor',
            'Dominios');
        this.queryURL = '/api/DominioApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431701422080423CjtoVis_10ICtjoVis_2';
        dsItem.name = 'plant.codigolegal';
        dsItem.field = 'plant-codigolegal';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_DominiosPorAsesor_item_Clas_1431701422080423CjtoVis_10ICtjoVis_2',
            this.dsplantdcodigolegal);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431701422080423CjtoVis_10ICtjoVis_1';
        dsItem.name = 'plant.nombre';
        dsItem.field = 'plant-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_Dominio_ds_DS_DominiosPorAsesor_item_Clas_1431701422080423CjtoVis_10ICtjoVis_1',
            this.dsplantdnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431701422080423AccOfer_8ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Dominio_act_A_DominiosPorAsesor_item_Clas_1431701422080423AccOfer_8ElemAcc_1',
            'Añadir Dominio');
        accItem.nounVerb = false;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Agentexproducto.name;
        accItem.targetUI = ModelConstants.Agentexproducto.siuutadddominio;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431701422080423AccOfer_8ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Dominio_act_A_DominiosPorAsesor_item_Clas_1431701422080423AccOfer_8ElemAcc_2',
            'Quitar Dominio');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Agentexproducto.name;
        accItem.targetUI = ModelConstants.Agentexproducto.siuutdeldominio;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }

    public override isActionEnabled(actionId: number): boolean {
        if (actionId === 0) {
            if ( this.context && this.context.exchangeInfo && this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length === 1) {
                return true;
            } else {
                return false;
            }
        } else {
            return super.isActionEnabled(actionId);
        }
    }
}
