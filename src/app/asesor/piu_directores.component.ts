import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType, OpenScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { AsesorFilterFuDirectores} from './filters/asesorfilterfudirectores';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_Directores of Asesor »
 */
export class AsesorPIUuDirectoresComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsusuario = 'Usuario';
    private readonly dsdrvnombrecompleto = 'Nombre completo';
    private readonly dsusuarioldap = 'Usuario LDAP';
    private readonly dsemail = 'Email';
    private readonly dsverdbasicospersona = 'Ver datos básicos de usuarios';
    private readonly dsverdocidentificacionpersona = 'Ver documentos persona';
    private readonly dsvercontratonovedad = 'Ver contrato en Novedades';
    private readonly dsmoddbasicospersona = 'Puede modificar persona';
    private readonly dsmodificadirector = 'Modifica director?';
    private readonly dscodjefe = 'Cod. Director';
    private readonly dssucursalddescripcion = 'Sucursal';
    private readonly dstipoidentificaciondnombrecorto = 'Tipo Doc.';
    private readonly dsnumidentificacion = 'Nº Doc.';
    private readonly dscanalcomercial = 'Canal Comercial';
    private readonly dscargo = 'Tipo Agente';
    private readonly dsestado = 'Estado';

    /** Filters */
    public f0: AsesorFilterFuDirectores;

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
        this.idXML = 'Clas_1431886233600794UIPobCl_4';
        this.className = ModelConstants.Asesor.name;
        this.classAlias = this.langMng.translateText('cls_Asesor',
            'Asesor');
        this.supplementaryInfoAtt.push('primernombre');
        this.supplementaryInfoAtt.push('segundonombre');
        this.supplementaryInfoAtt.push('primerapellido');
        this.iuName = 'PIU_Directores';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Asesor_piu_PIU_Directores',
            'Directores');
        this.f0 = new AsesorFilterFuDirectores(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/AsesorApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_6ICtjoVis_1';
        dsItem.name = 'usuario';
        dsItem.field = 'usuario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_M_Directores_item_Clas_1431886233600794CjtoVis_6ICtjoVis_1',
            this.dsusuario);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_6ICtjoVis_15';
        dsItem.name = 'drvnombrecompleto';
        dsItem.field = 'drvnombrecompleto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_M_Directores_item_Clas_1431886233600794CjtoVis_6ICtjoVis_15',
            this.dsdrvnombrecompleto);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_6ICtjoVis_6';
        dsItem.name = 'usuarioldap';
        dsItem.field = 'usuarioldap';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_M_Directores_item_Clas_1431886233600794CjtoVis_6ICtjoVis_6',
            this.dsusuarioldap);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_6ICtjoVis_7';
        dsItem.name = 'email';
        dsItem.field = 'email';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_M_Directores_item_Clas_1431886233600794CjtoVis_6ICtjoVis_7',
            this.dsemail);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_6ICtjoVis_16';
        dsItem.name = 'verdbasicospersona';
        dsItem.field = 'verdbasicospersona';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_M_Directores_item_Clas_1431886233600794CjtoVis_6ICtjoVis_16',
            this.dsverdbasicospersona);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_6ICtjoVis_17';
        dsItem.name = 'verdocidentificacionpersona';
        dsItem.field = 'verdocidentificacionpersona';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_M_Directores_item_Clas_1431886233600794CjtoVis_6ICtjoVis_17',
            this.dsverdocidentificacionpersona);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_6ICtjoVis_18';
        dsItem.name = 'vercontratonovedad';
        dsItem.field = 'vercontratonovedad';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_M_Directores_item_Clas_1431886233600794CjtoVis_6ICtjoVis_18',
            this.dsvercontratonovedad);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_6ICtjoVis_8';
        dsItem.name = 'moddbasicospersona';
        dsItem.field = 'moddbasicospersona';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_M_Directores_item_Clas_1431886233600794CjtoVis_6ICtjoVis_8',
            this.dsmoddbasicospersona);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_6ICtjoVis_9';
        dsItem.name = 'modificadirector';
        dsItem.field = 'modificadirector';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_M_Directores_item_Clas_1431886233600794CjtoVis_6ICtjoVis_9',
            this.dsmodificadirector);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_6ICtjoVis_11';
        dsItem.name = 'codjefe';
        dsItem.field = 'codjefe';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_M_Directores_item_Clas_1431886233600794CjtoVis_6ICtjoVis_11',
            this.dscodjefe);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_6ICtjoVis_12';
        dsItem.name = 'sucursal.descripcion';
        dsItem.field = 'sucursal-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_M_Directores_item_Clas_1431886233600794CjtoVis_6ICtjoVis_12',
            this.dssucursalddescripcion);
        dsItem.agents = [ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_6ICtjoVis_13';
        dsItem.name = 'tipoidentificacion.nombrecorto';
        dsItem.field = 'tipoidentificacion-nombrecorto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_M_Directores_item_Clas_1431886233600794CjtoVis_6ICtjoVis_13',
            this.dstipoidentificaciondnombrecorto);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_6ICtjoVis_14';
        dsItem.name = 'numidentificacion';
        dsItem.field = 'numidentificacion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 60;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_M_Directores_item_Clas_1431886233600794CjtoVis_6ICtjoVis_14',
            this.dsnumidentificacion);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_6ICtjoVis_19';
        dsItem.name = 'canalcomercial';
        dsItem.field = 'canalcomercial';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_M_Directores_item_Clas_1431886233600794CjtoVis_6ICtjoVis_19',
            this.dscanalcomercial);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_6ICtjoVis_20';
        dsItem.name = 'cargo';
        dsItem.field = 'cargo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_M_Directores_item_Clas_1431886233600794CjtoVis_6ICtjoVis_20',
            this.dscargo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_6ICtjoVis_21';
        dsItem.name = 'estado';
        dsItem.field = 'estado';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_M_Directores_item_Clas_1431886233600794CjtoVis_6ICtjoVis_21',
            this.dsestado);
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
        accItem.idXML = 'Clas_1431886233600794AccOfer_2ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_Asesor_act_A_Asesor_MD_item_Clas_1431886233600794AccOfer_2ElemAcc_1',
            'Modificar asesor');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Asesor.name;
        accItem.targetUI = ModelConstants.Asesor.siuutmodificarasesor;
        accItem.setShowInModalProperties('imes-asesor-siu-tmodificarasesor',
            this.langMng.translateText(
            'cls_Asesor_svc_TMODIFICARASESOR',
            'Modificar asesor'));
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431886233600794AccOfer_2ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_Asesor_act_A_Asesor_MD_item_Clas_1431886233600794AccOfer_2ElemAcc_2',
            'Productos');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Asesor.name;
        accItem.targetUI = ModelConstants.Asesor.mdiuuasesorproductos;
        accItem.targetType  = ScenarioType.MasterDetail;
        this.actions.push(accItem);

    }

    /**
     * Initialize the navigation items
     */
    public override initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1431886233600794NavOfer_5ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_Asesor_nav_N_AsesorDirectores_item_Clas_1431886233600794NavOfer_5ElemNav_1',
            'Histórico Información');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        navItem.targetClass = ModelConstants.Loginformacionasesor.name;
        navItem.targetUI = ModelConstants.Loginformacionasesor.piuuloginformacionasesor;
        navItem.rolePath = 'Asesor';
        navItem.targetType  = ScenarioType.Population;
        this.navigations.push(navItem);

        navItem = new AccNavItem();
        navItem.id = 1;
        navItem.idXML = 'Clas_1431886233600794NavOfer_5ElemNav_2';
        navItem.alias = this.langMng.translateText(
            'cls_Asesor_nav_N_AsesorDirectores_item_Clas_1431886233600794NavOfer_5ElemNav_2',
            'Histórico Planes');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        navItem.targetClass = ModelConstants.Loghistoricoplanes.name;
        navItem.targetUI = ModelConstants.Loghistoricoplanes.piuuloghistoricoplanes;
        navItem.rolePath = 'Asesor';
        navItem.targetType  = ScenarioType.Population;
        this.navigations.push(navItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
