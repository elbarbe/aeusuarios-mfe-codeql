import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { FuncionarioFilterFuFuncionariouPorNombreNoAseso} from './filters/funcionariofilterfufuncionarioupornombrenoaseso';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_Usuarios of Funcionario »
 */
@Component({
    selector: 'imes-funcionario-piu-usuarios',
    templateUrl: './piu_usuarios.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FuncionarioPIUuUsuariosComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsusuario = 'Usuario';
    private readonly dsroldnombre = 'Rol';
    private readonly dsprimernombre = 'Primer nombre';
    private readonly dssegundonombre = 'Segundo nombre';
    private readonly dsprimerapellido = 'Primer apellido';
    private readonly dssegundoapellido = 'Segundo apellido';
    private readonly dsdisponible = 'Disponible';
    private readonly dsusuarioldap = 'Usuario LDAP';
    private readonly dsemail = 'Email';
    private readonly dssucursalddescripcion = 'Sucursal';

    /** Filters */
    public f0: FuncionarioFilterFuFuncionariouPorNombreNoAseso;

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
        this.idXML = 'Clas_1431626842112800UIPobCl_6';
        this.className = ModelConstants.Funcionario.name;
        this.iuName = ModelConstants.Funcionario.piuuusuarios;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Funcionario_piu_PIU_Usuarios',
            'Usuarios');
        this.f0 = new FuncionarioFilterFuFuncionariouPorNombreNoAseso(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/FuncionarioApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1431626842112800CjtoVis_2ICtjoVis_1';
        dsItem.name = 'usuario';
        dsItem.field = 'usuario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Funcionario_ds_DS_Agente_PIU_item_Clas_1431626842112800CjtoVis_2ICtjoVis_1',
            this.dsusuario);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431626842112800CjtoVis_2ICtjoVis_6';
        dsItem.name = 'rol.nombre';
        dsItem.field = 'rol-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Funcionario_ds_DS_Agente_PIU_item_Clas_1431626842112800CjtoVis_2ICtjoVis_6',
            this.dsroldnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431626842112800CjtoVis_2ICtjoVis_2';
        dsItem.name = 'primernombre';
        dsItem.field = 'primernombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Funcionario_ds_DS_Agente_PIU_item_Clas_1431626842112800CjtoVis_2ICtjoVis_2',
            this.dsprimernombre);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431626842112800CjtoVis_2ICtjoVis_3';
        dsItem.name = 'segundonombre';
        dsItem.field = 'segundonombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Funcionario_ds_DS_Agente_PIU_item_Clas_1431626842112800CjtoVis_2ICtjoVis_3',
            this.dssegundonombre);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431626842112800CjtoVis_2ICtjoVis_4';
        dsItem.name = 'primerapellido';
        dsItem.field = 'primerapellido';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Funcionario_ds_DS_Agente_PIU_item_Clas_1431626842112800CjtoVis_2ICtjoVis_4',
            this.dsprimerapellido);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431626842112800CjtoVis_2ICtjoVis_5';
        dsItem.name = 'segundoapellido';
        dsItem.field = 'segundoapellido';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Funcionario_ds_DS_Agente_PIU_item_Clas_1431626842112800CjtoVis_2ICtjoVis_5',
            this.dssegundoapellido);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431626842112800CjtoVis_2ICtjoVis_10';
        dsItem.name = 'disponible';
        dsItem.field = 'disponible';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_Funcionario_ds_DS_Agente_PIU_item_Clas_1431626842112800CjtoVis_2ICtjoVis_10',
            this.dsdisponible);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431626842112800CjtoVis_2ICtjoVis_7';
        dsItem.name = 'usuarioldap';
        dsItem.field = 'usuarioldap';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Funcionario_ds_DS_Agente_PIU_item_Clas_1431626842112800CjtoVis_2ICtjoVis_7',
            this.dsusuarioldap);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431626842112800CjtoVis_2ICtjoVis_8';
        dsItem.name = 'email';
        dsItem.field = 'email';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_Funcionario_ds_DS_Agente_PIU_item_Clas_1431626842112800CjtoVis_2ICtjoVis_8',
            this.dsemail);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1431626842112800CjtoVis_2ICtjoVis_9';
        dsItem.name = 'sucursal.descripcion';
        dsItem.field = 'sucursal-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_Funcionario_ds_DS_Agente_PIU_item_Clas_1431626842112800CjtoVis_2ICtjoVis_9',
            this.dssucursalddescripcion);
        dsItem.agents = [ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1431626842112800AccOfer_1ElemAcc_6';
        accItem.alias = this.langMng.translateText(
            'cls_Funcionario_act_A_Agente_PIU_item_Clas_1431626842112800AccOfer_1ElemAcc_6',
            'Crear');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutcrearagente;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1431626842112800AccOfer_1ElemAcc_7';
        accItem.alias = this.langMng.translateText(
            'cls_Funcionario_act_A_Agente_PIU_item_Clas_1431626842112800AccOfer_1ElemAcc_7',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuutmodificaragente;
        accItem.setShowInModalProperties('imes-gs-siu-tmodificaragente',
            this.langMng.translateText(
            'gs_TMODIFICARAGENTE',
            'Modificar Agente'));

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1431626842112800AccOfer_1ElemAcc_8';
        accItem.alias = this.langMng.translateText(
            'cls_Funcionario_act_A_Agente_PIU_item_Clas_1431626842112800AccOfer_1ElemAcc_8',
            'Marcar disponibilidad');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Funcionario.name;
        accItem.targetUI = ModelConstants.Funcionario.siuutcambiardisponible;
        accItem.setShowInModalProperties('imes-funcionario-siu-tcambiardisponible',
            this.langMng.translateText(
            'cls_Funcionario_svc_TCAMBIARDISPONIBLE',
            'Marcar disponibilidad'));

        this.actions.push(accItem);

    }

    /**
     * Initialize the navigation items
     */
    public override initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1431626842112800NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_Funcionario_nav_A_Agente_PIU_item_Clas_1431626842112800NavOfer_1ElemNav_1',
            'Histórico');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        navItem.targetClass = ModelConstants.Logfuncionario.name;
        navItem.targetUI = ModelConstants.Logfuncionario.piuulogfuncionario;
        navItem.rolePath = 'Funcionario';
        this.navigations.push(navItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
