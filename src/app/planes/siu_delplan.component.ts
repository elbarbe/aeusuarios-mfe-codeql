import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVLenseSearch } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-planes-siu-delplan',
    templateUrl: './siu_delplan.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanesSIUuDelPlanComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisPlanes: FieldOVLenseSearch;
    public puevcAfiliaciones: FieldOVLenseSearch;

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
        public langMng: LanguageMng, public stdFun: StandardFunctions,
        public override condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.idXML = 'Clas_1431695392768502Ser_12UIServ_2';
        this.className = ModelConstants.Planes.name;
        this.iuName = ModelConstants.Planes.siuudelplan;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'DelPlan';
        this.title = this.langMng.translateText('cls_Planes_svc_DelPlan',
            'Desasociar');

        // Create inbound argument components
        this.puthisPlanes = new FieldOVLenseSearch(this.langMng);
        this.puevcAfiliaciones = new FieldOVLenseSearch(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisPlanes.nameInRequest = 'p_thisplanes';
        this.puthisPlanes.alias = this.langMng.translateText(
            'cls_Planes_svc_DelPlan_inArg_p_thisPlanes',
            'Planes');
        this.puthisPlanes.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisPlanes.mandatory = true;
        this.puthisPlanes.dataType = ModelConstants.Planes.name;
        this.puthisPlanes.maxLength = 150;
        this.puthisPlanes.assignCSS();
        this.fields.push(this.puthisPlanes);

        this.puevcAfiliaciones.nameInRequest = 'p_evcafiliaciones';
        this.puevcAfiliaciones.alias = this.langMng.translateText(
            'cls_Planes_svc_DelPlan_inArg_p_evcAfiliaciones',
            'Afiliaciones');
        this.puevcAfiliaciones.mandatory = true;
        this.puevcAfiliaciones.dataType = ModelConstants.Afiliaciones.name;
        this.puevcAfiliaciones.maxLength = 50;
        this.puevcAfiliaciones.assignCSS();
        this.fields.push(this.puevcAfiliaciones);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Planes'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisPlanes.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisplanes('SetValue', true);
            this.puthisPlanes.enabled = false;
            this.executeDependecyRulesputhisplanes('SetEnabled', true);
        }
    }

    /**
     * Initialize arguments from context that identify a Role
     */
    public override initializeFromCtxRelated(): void {
        let lastRole = '';
        let lastRoleOid = null;
        if (this.context.exchangeInfo) {
            lastRole = this.context.exchangeInfo.getLastNavigationRole();
            lastRoleOid = this.context.exchangeInfo.getLastNavigationRoleOid();
        }

        if (lastRole && lastRoleOid) {
            if (lastRole === 'Planes') {
                this.puthisPlanes.setValue(lastRoleOid);
                this.executeDependecyRulesputhisplanes('SetValue', true);
                this.puthisPlanes.enabled = false;
                this.executeDependecyRulesputhisplanes('SetEnabled', true);
            }
            if (lastRole === 'Afiliaciones') {
                this.puevcAfiliaciones.setValue(lastRoleOid);
                this.executeDependecyRulespuevcafiliaciones('SetValue', true);
                this.puevcAfiliaciones.enabled = false;
                this.executeDependecyRulespuevcafiliaciones('SetEnabled', true);
            }
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisPlanes'.toLowerCase()) {
            this.puthisPlanes.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisplanes('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'puevcAfiliaciones'.toLowerCase()) {
            this.puevcAfiliaciones.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespuevcafiliaciones('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisPlanes argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisplanes(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisplanes();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisPlanes argument
     */
    private setSuppInfoputhisplanes(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisPlanes.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Planes.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisPlanes.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisPlanes.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Planes.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisPlanes.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_thisPlanes lense search argument
     */
    public onputhisplanesChange(): void {

        const searchText = this.puthisPlanes.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisPlanes.lastText) {
                this.puthisPlanes.removeCSSClass('noResultsLenseSearch');
                this.puthisPlanes.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Planes.name, 'IC_Plan', searchText, [], null).then(
                        (response: any) => {
                            this.puthisPlanes.removeCSSClass('noResultsLenseSearch');
                            this.puthisPlanes.searchResults = response.results;
                            if (this.puthisPlanes.searchResults &&
                                this.puthisPlanes.searchResults.length === 0) {
                                this.puthisPlanes.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisPlanes.searchResults &&
                                this.puthisPlanes.searchResults.length === 1) {
                                this.processputhisplanesSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisPlanes.removeCSSClass('noResultsLenseSearch');
                            this.puthisPlanes.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisPlanes.removeCSSClass('noResultsLenseSearch');
            this.puthisPlanes.searchResults = [];
            this.cleanputhisplanes();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisPlanes lense search argument
     */
    public processputhisplanesSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisPlanes.searchResults.length > index) {
            selectedInstance = this.puthisPlanes.searchResults[index];
        }
        // Clean the result list
        this.puthisPlanes.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisPlanes.allowMultiSelect) {
                this.puthisPlanes.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisPlanes.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisplanes('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisPlanes lense search argument
     */
    public cleanputhisplanes(): void {
        this.clearValidationMessages();
        this.puthisPlanes.clean();
        this.executeDependecyRulesputhisplanes('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for p_evcAfiliaciones argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuevcafiliaciones(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopuevcafiliaciones();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_evcAfiliaciones argument
     */
    private setSuppInfopuevcafiliaciones(): void {

        const displaySetIC = 'UsuarioLDAP';
        let numberMissingSupInfo = 0;
        for (const value of this.puevcAfiliaciones.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Afiliaciones.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puevcAfiliaciones.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puevcAfiliaciones.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Afiliaciones.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puevcAfiliaciones.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_evcAfiliaciones lense search argument
     */
    public onpuevcafiliacionesChange(): void {

        const searchText = this.puevcAfiliaciones.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puevcAfiliaciones.lastText) {
                this.puevcAfiliaciones.removeCSSClass('noResultsLenseSearch');
                this.puevcAfiliaciones.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Afiliaciones.name, 'SIAfiliaciones', searchText, [], null).then(
                        (response: any) => {
                            this.puevcAfiliaciones.removeCSSClass('noResultsLenseSearch');
                            this.puevcAfiliaciones.searchResults = response.results;
                            if (this.puevcAfiliaciones.searchResults &&
                                this.puevcAfiliaciones.searchResults.length === 0) {
                                this.puevcAfiliaciones.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puevcAfiliaciones.searchResults &&
                                this.puevcAfiliaciones.searchResults.length === 1) {
                                this.processpuevcafiliacionesSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puevcAfiliaciones.removeCSSClass('noResultsLenseSearch');
                            this.puevcAfiliaciones.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puevcAfiliaciones.removeCSSClass('noResultsLenseSearch');
            this.puevcAfiliaciones.searchResults = [];
            this.cleanpuevcafiliaciones();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_evcAfiliaciones lense search argument
     */
    public processpuevcafiliacionesSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puevcAfiliaciones.searchResults.length > index) {
            selectedInstance = this.puevcAfiliaciones.searchResults[index];
        }
        // Clean the result list
        this.puevcAfiliaciones.searchResults = [];
        if (selectedInstance) {
            if (!this.puevcAfiliaciones.allowMultiSelect) {
                this.puevcAfiliaciones.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puevcAfiliaciones.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespuevcafiliaciones('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_evcAfiliaciones lense search argument
     */
    public cleanpuevcafiliaciones(): void {
        this.clearValidationMessages();
        this.puevcAfiliaciones.clean();
        this.executeDependecyRulespuevcafiliaciones('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisPlanes'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisPlanes.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Planes_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('puevcAfiliaciones'.toLowerCase() === argumentName.toLowerCase()) {
            this.puevcAfiliaciones.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Afiliaciones_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
