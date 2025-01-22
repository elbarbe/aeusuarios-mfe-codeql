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

@Component({
    selector: 'imes-logfuncionario-piu-logfuncionario',
    templateUrl: './piu_logfuncionario.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogFuncionarioPIUuLogFuncionarioComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsfecha = 'Fecha';
    private readonly dsloginfuncionario = 'Login';
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
        this.idXML = 'Clas_1586853183488419UIPobCl_1';
        this.className = ModelConstants.Logfuncionario.name;
        this.iuName = ModelConstants.Logfuncionario.piuulogfuncionario;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_LogFuncionario_piu_PIU_LogFuncionario',
            'Histórico Funcionario');
        this.queryURL = '/api/LogFuncionarioApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1586853183488419CjtoVis_1ICtjoVis_2';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_LogFuncionario_ds_DS_LogFuncionario_item_Clas_1586853183488419CjtoVis_1ICtjoVis_2',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586853183488419CjtoVis_1ICtjoVis_4';
        dsItem.name = 'loginfuncionario';
        dsItem.field = 'loginfuncionario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogFuncionario_ds_DS_LogFuncionario_item_Clas_1586853183488419CjtoVis_1ICtjoVis_4',
            this.dsloginfuncionario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1586853183488419CjtoVis_1ICtjoVis_1';
        dsItem.name = 'disponible';
        dsItem.field = 'disponible';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_LogFuncionario_ds_DS_LogFuncionario_item_Clas_1586853183488419CjtoVis_1ICtjoVis_1',
            this.dsdisponible);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_LogFuncionario', value: 'Por fecha'});
        this.orderCriteria = 'OC_LogFuncionario';
    }
}
