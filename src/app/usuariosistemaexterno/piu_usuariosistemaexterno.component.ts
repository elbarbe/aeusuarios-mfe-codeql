import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType, OpenScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_UsuarioSistemaExterno of UsuarioSistemaExterno »
 */
@Component({
    selector: 'imes-usuariosistemaexterno-piu-usuariosistemaexterno',
    templateUrl: './piu_usuariosistemaexterno.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioSistemaExternoPIUuUsuarioSistemaExternoComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dslogin = 'Login';
    private readonly dsdescripcion = 'Descripción';

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
        this.idXML = 'Clas_1738059022336227UIPobCl_1';
        this.className = ModelConstants.Usuariosistemaexterno.name;
        this.classAlias = this.langMng.translateText('cls_UsuarioSistemaExterno',
            'Sistema Externo');
        this.iuName = ModelConstants.Usuariosistemaexterno.piuuusuariosistemaexterno;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_UsuarioSistemaExterno_piu_PIU_UsuarioSistemaExterno',
            'Sistemas Externos');
        this.queryURL = '/api/UsuarioSistemaExternoApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1738059022336227CjtoVis_1ICtjoVis_1';
        dsItem.name = 'login';
        dsItem.field = 'login';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioSistemaExterno_ds_DS_UsuarioSistemaExterno_item_Clas_1738059022336227CjtoVis_1ICtjoVis_1',
            this.dslogin);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1738059022336227CjtoVis_1ICtjoVis_2';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioSistemaExterno_ds_DS_UsuarioSistemaExterno_item_Clas_1738059022336227CjtoVis_1ICtjoVis_2',
            this.dsdescripcion);
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
        accItem.idXML = 'Clas_1738059022336227AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_UsuarioSistemaExterno_act_A_UsuarioSistemaExterno_item_Clas_1738059022336227AccOfer_1ElemAcc_1',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Usuariosistemaexterno.name;
        accItem.targetUI = ModelConstants.Usuariosistemaexterno.siuucrear;
        accItem.setShowInModalProperties('imes-usuariosistemaexterno-siu-crear',
            this.langMng.translateText(
            'cls_UsuarioSistemaExterno_svc_crear',
            'Crear'));
        accItem.targetType  = ScenarioType.Create;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1738059022336227AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_UsuarioSistemaExterno_act_A_UsuarioSistemaExterno_item_Clas_1738059022336227AccOfer_1ElemAcc_2',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Usuariosistemaexterno.name;
        accItem.targetUI = ModelConstants.Usuariosistemaexterno.siuumodificar;
        accItem.setShowInModalProperties('imes-usuariosistemaexterno-siu-modificar',
            this.langMng.translateText(
            'cls_UsuarioSistemaExterno_svc_modificar',
            'Modificar'));
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1738059022336227AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_UsuarioSistemaExterno_act_A_UsuarioSistemaExterno_item_Clas_1738059022336227AccOfer_1ElemAcc_3',
            'Set password');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Usuariosistemaexterno.name;
        accItem.targetUI = ModelConstants.Usuariosistemaexterno.siuusetabcdefgh;
        accItem.setShowInModalProperties('imes-usuariosistemaexterno-siu-setpassword',
            this.langMng.translateText(
            'cls_UsuarioSistemaExterno_svc_setPassword',
            'Set password'));
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1738059022336227AccOfer_1ElemAcc_5';
        accItem.alias = this.langMng.translateText(
            'cls_UsuarioSistemaExterno_act_A_UsuarioSistemaExterno_item_Clas_1738059022336227AccOfer_1ElemAcc_5',
            'Eliminar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Usuariosistemaexterno.name;
        accItem.targetUI = ModelConstants.Usuariosistemaexterno.siuueliminar;
        accItem.setShowInModalProperties('genericsiu',
            this.langMng.translateText(
            'cls_UsuarioSistemaExterno_svc_eliminar',
            'Eliminar'));
        accItem.targetType  = ScenarioType.Delete;
        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
