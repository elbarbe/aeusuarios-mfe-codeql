import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements PIU PIU_LogHistoricoPlanes of LogHistoricoPlanes »
 */
@Component({
    selector: 'imes-loghistoricoplanes-piu-loghistoricoplanes',
    templateUrl: './piu_loghistoricoplanes.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogHistoricoPlanesPIUuLogHistoricoPlanesComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsaccion = 'Acción';
    private readonly dsproducto = 'Producto';
    private readonly dsplan = 'Plan';
    private readonly dsfechahora = 'Fecha';
    private readonly dsloginfuncionario = 'Login';

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
        this.idXML = 'Clas_1624004755456313UIPobCl_1';
        this.className = ModelConstants.Loghistoricoplanes.name;
        this.classAlias = this.langMng.translateText('cls_LogHistoricoPlanes',
            'Histórico Planes');
        this.iuName = ModelConstants.Loghistoricoplanes.piuuloghistoricoplanes;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_LogHistoricoPlanes_piu_PIU_LogHistoricoPlanes',
            'Histórico Planes');
        this.queryURL = '/api/LogHistoricoPlanesApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1624004755456313CjtoVis_1ICtjoVis_1';
        dsItem.name = 'accion';
        dsItem.field = 'accion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_LogHistoricoPlanes_ds_DS_LogHistoricoPlanes_item_Clas_1624004755456313CjtoVis_1ICtjoVis_1',
            this.dsaccion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1624004755456313CjtoVis_1ICtjoVis_2';
        dsItem.name = 'producto';
        dsItem.field = 'producto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_LogHistoricoPlanes_ds_DS_LogHistoricoPlanes_item_Clas_1624004755456313CjtoVis_1ICtjoVis_2',
            this.dsproducto);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1624004755456313CjtoVis_1ICtjoVis_3';
        dsItem.name = 'plan';
        dsItem.field = 'plan';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 10;
        dsItem.alias = this.langMng.translateText(
            'cls_LogHistoricoPlanes_ds_DS_LogHistoricoPlanes_item_Clas_1624004755456313CjtoVis_1ICtjoVis_3',
            this.dsplan);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1624004755456313CjtoVis_1ICtjoVis_4';
        dsItem.name = 'fechahora';
        dsItem.field = 'fechahora';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_LogHistoricoPlanes_ds_DS_LogHistoricoPlanes_item_Clas_1624004755456313CjtoVis_1ICtjoVis_4',
            this.dsfechahora);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1624004755456313CjtoVis_1ICtjoVis_5';
        dsItem.name = 'loginfuncionario';
        dsItem.field = 'loginfuncionario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_LogHistoricoPlanes_ds_DS_LogHistoricoPlanes_item_Clas_1624004755456313CjtoVis_1ICtjoVis_5',
            this.dsloginfuncionario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_LogHistoricoPlanes', value: 'Por fecha hora'});
        this.orderCriteria = 'OC_LogHistoricoPlanes';
    }
}
