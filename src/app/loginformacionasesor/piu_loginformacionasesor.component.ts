import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_LogInformacionAsesor of LogInformacionAsesor »
 */
@Component({
    selector: 'imes-loginformacionasesor-piu-loginformacionasesor',
    templateUrl: './piu_loginformacionasesor.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInformacionAsesorPIUuLogInformacionAsesorComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsfechahora = 'Fecha';
    private readonly dsloginfuncionario = 'Login';
    private readonly dsverdatospersona = 'Ver datos persona';
    private readonly dsverdocspersona = 'Ver documentos persona';
    private readonly dsvercontratonovedad = 'Ver contrato Novedades';
    private readonly dsaccesovalidadorusuarios = 'Acceso validador usuarios';

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
        this.idXML = 'Clas_1623836459008779UIPobCl_1';
        this.className = ModelConstants.Loginformacionasesor.name;
        this.iuName = ModelConstants.Loginformacionasesor.piuuloginformacionasesor;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_LogInformacionAsesor_piu_PIU_LogInformacionAsesor',
            'Historico Información');
        this.queryURL = '/api/LogInformacionAsesorApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1623836459008779CjtoVis_1ICtjoVis_1';
        dsItem.name = 'fechahora';
        dsItem.field = 'fechahora';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_LogInformacionAsesor_ds_DS_LogInformacionAsesor_item_Clas_1623836459008779CjtoVis_1ICtjoVis_1',
            this.dsfechahora);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1623836459008779CjtoVis_1ICtjoVis_2';
        dsItem.name = 'loginfuncionario';
        dsItem.field = 'loginfuncionario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogInformacionAsesor_ds_DS_LogInformacionAsesor_item_Clas_1623836459008779CjtoVis_1ICtjoVis_2',
            this.dsloginfuncionario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1623836459008779CjtoVis_1ICtjoVis_4';
        dsItem.name = 'verdatospersona';
        dsItem.field = 'verdatospersona';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_LogInformacionAsesor_ds_DS_LogInformacionAsesor_item_Clas_1623836459008779CjtoVis_1ICtjoVis_4',
            this.dsverdatospersona);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1623836459008779CjtoVis_1ICtjoVis_5';
        dsItem.name = 'verdocspersona';
        dsItem.field = 'verdocspersona';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_LogInformacionAsesor_ds_DS_LogInformacionAsesor_item_Clas_1623836459008779CjtoVis_1ICtjoVis_5',
            this.dsverdocspersona);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1623836459008779CjtoVis_1ICtjoVis_3';
        dsItem.name = 'vercontratonovedad';
        dsItem.field = 'vercontratonovedad';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_LogInformacionAsesor_ds_DS_LogInformacionAsesor_item_Clas_1623836459008779CjtoVis_1ICtjoVis_3',
            this.dsvercontratonovedad);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1623836459008779CjtoVis_1ICtjoVis_6';
        dsItem.name = 'accesovalidadorusuarios';
        dsItem.field = 'accesovalidadorusuarios';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_LogInformacionAsesor_ds_DS_LogInformacionAsesor_item_Clas_1623836459008779CjtoVis_1ICtjoVis_6',
            this.dsaccesovalidadorusuarios);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_LogInformacionAsesor', value: 'Por fecha y hora'});
        this.orderCriteria = 'OC_LogInformacionAsesor';
    }
}
