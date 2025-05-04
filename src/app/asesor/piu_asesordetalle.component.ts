import { ChangeDetectorRef } from '@angular/core';
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
 * « Implements PIU PIU_AsesorDetalle of Asesor »
 */
export class AsesorPIUuAsesorDetalleComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsusuario = 'Usuario';
    private readonly dsdrvnombrecompleto = 'Descripción';
    private readonly dsusuarioldap = 'Usuario LDAP';
    private readonly dsesintegral = 'Asesor Integral';
    private readonly dsemail = 'Email';
    private readonly dsverdbasicospersona = 'Ver datos básicos de usuarios';
    private readonly dsverdocidentificacionpersona = 'Ver documentos persona';
    private readonly dsvercontratonovedad = 'Ver contrato en Novedades';
    private readonly dsmoddbasicospersona = 'Puede modificar persona';
    private readonly dsmodificadirector = 'Modifica director?';
    private readonly dsesdirector = 'Es director?';
    private readonly dsaccesovalidadorusuarios = 'Acceso validador usuarios';
    private readonly dscodjefe = 'Cod. Director';
    private readonly dsdrvnomjefe = 'Nombre Director';
    private readonly dssucursalddescripcion = 'Sucursal';
    private readonly dstipoidentificaciondnombrecorto = 'Tipo Doc.';
    private readonly dsnumidentificacion = 'Nº Doc.';
    private readonly dscanalcomercial = 'Canal Comercial';
    private readonly dscargo = 'Tipo Agente';
    private readonly dsestado = 'Estado';
    private readonly dsdisponible = 'Disponible';

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
        this.idXML = 'Clas_1431886233600794UIPobCl_3';
        this.className = ModelConstants.Asesor.name;
        this.iuName = 'PIU_AsesorDetalle';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Asesor_piu_PIU_AsesorDetalle',
            'Subordinados');
        this.queryURL = '/api/AsesorApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_18';
        dsItem.name = 'usuario';
        dsItem.field = 'usuario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_18',
            this.dsusuario);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_29';
        dsItem.name = 'drvnombrecompleto';
        dsItem.field = 'drvnombrecompleto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_29',
            this.dsdrvnombrecompleto);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_16';
        dsItem.name = 'usuarioldap';
        dsItem.field = 'usuarioldap';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_16',
            this.dsusuarioldap);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_27';
        dsItem.name = 'esintegral';
        dsItem.field = 'esintegral';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_27',
            this.dsesintegral);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_17';
        dsItem.name = 'email';
        dsItem.field = 'email';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_17',
            this.dsemail);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_30';
        dsItem.name = 'verdbasicospersona';
        dsItem.field = 'verdbasicospersona';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_30',
            this.dsverdbasicospersona);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_31';
        dsItem.name = 'verdocidentificacionpersona';
        dsItem.field = 'verdocidentificacionpersona';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_31',
            this.dsverdocidentificacionpersona);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_32';
        dsItem.name = 'vercontratonovedad';
        dsItem.field = 'vercontratonovedad';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_32',
            this.dsvercontratonovedad);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_15';
        dsItem.name = 'moddbasicospersona';
        dsItem.field = 'moddbasicospersona';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_15',
            this.dsmoddbasicospersona);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_23';
        dsItem.name = 'modificadirector';
        dsItem.field = 'modificadirector';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_23',
            this.dsmodificadirector);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_22';
        dsItem.name = 'esdirector';
        dsItem.field = 'esdirector';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_22',
            this.dsesdirector);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_36';
        dsItem.name = 'accesovalidadorusuarios';
        dsItem.field = 'accesovalidadorusuarios';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_36',
            this.dsaccesovalidadorusuarios);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_21';
        dsItem.name = 'codjefe';
        dsItem.field = 'codjefe';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_21',
            this.dscodjefe);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_26';
        dsItem.name = 'drvnomjefe';
        dsItem.field = 'drvnomjefe';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_26',
            this.dsdrvnomjefe);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_20';
        dsItem.name = 'sucursal.descripcion';
        dsItem.field = 'sucursal-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_20',
            this.dssucursalddescripcion);
        dsItem.agents = [ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_24';
        dsItem.name = 'tipoidentificacion.nombrecorto';
        dsItem.field = 'tipoidentificacion-nombrecorto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_24',
            this.dstipoidentificaciondnombrecorto);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_25';
        dsItem.name = 'numidentificacion';
        dsItem.field = 'numidentificacion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 60;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_25',
            this.dsnumidentificacion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_33';
        dsItem.name = 'canalcomercial';
        dsItem.field = 'canalcomercial';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_33',
            this.dscanalcomercial);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_34';
        dsItem.name = 'cargo';
        dsItem.field = 'cargo';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_34',
            this.dscargo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_35';
        dsItem.name = 'estado';
        dsItem.field = 'estado';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_35',
            this.dsestado);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431886233600794CjtoVis_2ICtjoVis_28';
        dsItem.name = 'disponible';
        dsItem.field = 'disponible';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_Asesor_PIU_item_Clas_1431886233600794CjtoVis_2ICtjoVis_28',
            this.dsdisponible);
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

        this.actions.push(accItem);

    }

    /**
     * Initialize the navigation items
     */
    public override initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1431886233600794NavOfer_6ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_Asesor_nav_N_AsesorDetalle_item_Clas_1431886233600794NavOfer_6ElemNav_1',
            'Histórico Información');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        navItem.targetClass = ModelConstants.Loginformacionasesor.name;
        navItem.targetUI = ModelConstants.Loginformacionasesor.piuuloginformacionasesor;
        navItem.rolePath = 'Asesor';
        this.navigations.push(navItem);

        navItem = new AccNavItem();
        navItem.id = 1;
        navItem.idXML = 'Clas_1431886233600794NavOfer_6ElemNav_2';
        navItem.alias = this.langMng.translateText(
            'cls_Asesor_nav_N_AsesorDetalle_item_Clas_1431886233600794NavOfer_6ElemNav_2',
            'Histórico Planes');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        navItem.targetClass = ModelConstants.Loghistoricoplanes.name;
        navItem.targetUI = ModelConstants.Loghistoricoplanes.piuuloghistoricoplanes;
        navItem.rolePath = 'Asesor';
        this.navigations.push(navItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
