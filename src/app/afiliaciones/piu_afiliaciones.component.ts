import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { AfiliacionesFilterFuAfiliacionesPorNombre} from './filters/afiliacionesfilterfuafiliacionespornombre';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_Afiliaciones of Afiliaciones »
 */
@Component({
    selector: 'imes-afiliaciones-piu-afiliaciones',
    templateUrl: './piu_afiliaciones.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AfiliacionesPIUuAfiliacionesComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsusuario = 'Usuario';
    private readonly dsprimernombre = 'Primer nombre';
    private readonly dssegundonombre = 'Segundo nombre';
    private readonly dsprimerapellido = 'Primer apellido';
    private readonly dssegundoapellido = 'Segundo apellido';

    /** Filters */
    public f0: AfiliacionesFilterFuAfiliacionesPorNombre;

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
        this.idXML = 'Clas_1434549485568784UIPobCl_1';
        this.className = ModelConstants.Afiliaciones.name;
        this.classAlias = this.langMng.translateText('cls_Afiliaciones',
            'Afiliaciones');
        this.supplementaryInfoAtt.push('usuarioldap');
        this.iuName = ModelConstants.Afiliaciones.piuuafiliaciones;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Afiliaciones_piu_PIU_Afiliaciones',
            'Afiliaciones');
        this.f0 = new AfiliacionesFilterFuAfiliacionesPorNombre(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/AfiliacionesApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1434549485568784CjtoVis_2ICtjoVis_2';
        dsItem.name = 'usuario';
        dsItem.field = 'usuario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Afiliaciones_ds_DS_Afiliaciones_item_Clas_1434549485568784CjtoVis_2ICtjoVis_2',
            this.dsusuario);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568784CjtoVis_2ICtjoVis_3';
        dsItem.name = 'primernombre';
        dsItem.field = 'primernombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Afiliaciones_ds_DS_Afiliaciones_item_Clas_1434549485568784CjtoVis_2ICtjoVis_3',
            this.dsprimernombre);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568784CjtoVis_2ICtjoVis_4';
        dsItem.name = 'segundonombre';
        dsItem.field = 'segundonombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Afiliaciones_ds_DS_Afiliaciones_item_Clas_1434549485568784CjtoVis_2ICtjoVis_4',
            this.dssegundonombre);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568784CjtoVis_2ICtjoVis_1';
        dsItem.name = 'primerapellido';
        dsItem.field = 'primerapellido';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Afiliaciones_ds_DS_Afiliaciones_item_Clas_1434549485568784CjtoVis_2ICtjoVis_1',
            this.dsprimerapellido);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1434549485568784CjtoVis_2ICtjoVis_5';
        dsItem.name = 'segundoapellido';
        dsItem.field = 'segundoapellido';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_Afiliaciones_ds_DS_Afiliaciones_item_Clas_1434549485568784CjtoVis_2ICtjoVis_5',
            this.dssegundoapellido);
        dsItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1434549485568784AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_Afiliaciones_act_A_Afiliaciones_item_Clas_1434549485568784AccOfer_1ElemAcc_4',
            'Marcar disponibilidad');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Funcionario.name;
        accItem.targetUI = ModelConstants.Funcionario.siuutcambiardisponible;
        accItem.setShowInModalProperties('imes-funcionario-siu-tcambiardisponible',
            this.langMng.translateText(
            'cls_Funcionario_svc_TCAMBIARDISPONIBLE',
            'Marcar disponibilidad'));
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1434549485568784AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_Afiliaciones_act_A_Afiliaciones_item_Clas_1434549485568784AccOfer_1ElemAcc_3',
            'Planes asociados');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        accItem.targetClass = ModelConstants.Afiliaciones.name;
        accItem.targetUI = ModelConstants.Afiliaciones.mdiuuafiliacionesplanes;
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
        navItem.idXML = 'Clas_1434549485568784NavOfer_2ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_Afiliaciones_nav_N_Afiliaciones_item_Clas_1434549485568784NavOfer_2ElemNav_1',
            'Histórico Funcionario');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        navItem.targetClass = ModelConstants.Logfuncionario.name;
        navItem.targetUI = ModelConstants.Logfuncionario.piuulogfuncionario;
        navItem.rolePath = 'Funcionario';
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
