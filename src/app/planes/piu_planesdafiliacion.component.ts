import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_PlanesDAfiliacion of Planes »
 */
export class PlanesPIUuPlanesDAfiliacionComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsproductotdcodigolegal = 'Cod. Legal Producto';
    private readonly dsproductotddescripcion = 'Producto';
    private readonly dscodigolegal = 'Código Legal';
    private readonly dsnombre = 'Nombre';
    private readonly dsesbancorep = 'Es banco república';
    private readonly dsesvoluntario = 'Es Voluntario';
    private readonly dsiniciocontdiauno = 'Inicio de contratación día uno';

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
        this.idXML = 'Clas_1431695392768502UIPobCl_2';
        this.className = ModelConstants.Planes.name;
        this.classAlias = this.langMng.translateText('cls_Planes',
            'Plan');
        this.supplementaryInfoAtt.push('nombre');
        this.iuName = 'PIU_PlanesDAfiliacion';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Planes_piu_PIU_PlanesDAfiliacion',
            'Planes asociados');
        this.queryURL = '/api/PlanesApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_3ICtjoVis_6';
        dsItem.name = 'productot.codigolegal';
        dsItem.field = 'productot-codigolegal';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_PlanesDAfiliacion_item_Clas_1431695392768502CjtoVis_3ICtjoVis_6',
            this.dsproductotdcodigolegal);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_3ICtjoVis_7';
        dsItem.name = 'productot.descripcion';
        dsItem.field = 'productot-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_PlanesDAfiliacion_item_Clas_1431695392768502CjtoVis_3ICtjoVis_7',
            this.dsproductotddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_3ICtjoVis_1';
        dsItem.name = 'codigolegal';
        dsItem.field = 'codigolegal';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_PlanesDAfiliacion_item_Clas_1431695392768502CjtoVis_3ICtjoVis_1',
            this.dscodigolegal);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_3ICtjoVis_2';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_PlanesDAfiliacion_item_Clas_1431695392768502CjtoVis_3ICtjoVis_2',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_3ICtjoVis_4';
        dsItem.name = 'esbancorep';
        dsItem.field = 'esbancorep';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_PlanesDAfiliacion_item_Clas_1431695392768502CjtoVis_3ICtjoVis_4',
            this.dsesbancorep);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_3ICtjoVis_5';
        dsItem.name = 'esvoluntario';
        dsItem.field = 'esvoluntario';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_PlanesDAfiliacion_item_Clas_1431695392768502CjtoVis_3ICtjoVis_5',
            this.dsesvoluntario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431695392768502CjtoVis_3ICtjoVis_8';
        dsItem.name = 'iniciocontdiauno';
        dsItem.field = 'iniciocontdiauno';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Planes_ds_DS_PlanesDAfiliacion_item_Clas_1431695392768502CjtoVis_3ICtjoVis_8',
            this.dsiniciocontdiauno);
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
        accItem.idXML = 'Clas_1431695392768502AccOfer_2ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Planes_act_A_Planes_item_Clas_1431695392768502AccOfer_2ElemAcc_1',
            'Asociar');
        accItem.nounVerb = false;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Afiliaciones.name;
        accItem.targetUI = ModelConstants.Afiliaciones.siuuinsplan;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431695392768502AccOfer_2ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Planes_act_A_Planes_item_Clas_1431695392768502AccOfer_2ElemAcc_2',
            'Desasociar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Planes.name;
        accItem.targetUI = ModelConstants.Planes.siuudelplan;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
