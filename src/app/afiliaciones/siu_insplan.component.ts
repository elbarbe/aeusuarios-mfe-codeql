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
    selector: 'imes-afiliaciones-siu-insplan',
    templateUrl: './siu_insplan.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AfiliacionesSIUuInsPlanComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisAfiliaciones: FieldOVLenseSearch;
    public puevcPlanes: FieldOVLenseSearch;

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
        this.idXML = 'Clas_1434549485568784Ser_3UIServ_1';
        this.className = ModelConstants.Afiliaciones.name;
        this.iuName = ModelConstants.Afiliaciones.siuuinsplan;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'InsPlan';
        this.title = this.langMng.translateText('cls_Afiliaciones_svc_InsPlan',
            'Asociar Plan');

        // Create inbound argument components
        this.puthisAfiliaciones = new FieldOVLenseSearch(this.langMng);
        this.puevcPlanes = new FieldOVLenseSearch(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisAfiliaciones.nameInRequest = 'p_thisafiliaciones';
        this.puthisAfiliaciones.alias = this.langMng.translateText(
            'cls_Afiliaciones_svc_InsPlan_inArg_p_thisAfiliaciones',
            'Afiliaciones');
        this.puthisAfiliaciones.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisAfiliaciones.mandatory = true;
        this.puthisAfiliaciones.dataType = ModelConstants.Afiliaciones.name;
        this.puthisAfiliaciones.maxLength = 50;
        this.puthisAfiliaciones.assignCSS();
        this.fields.push(this.puthisAfiliaciones);

        this.puevcPlanes.nameInRequest = 'p_evcplanes';
        this.puevcPlanes.alias = this.langMng.translateText(
            'cls_Afiliaciones_svc_InsPlan_inArg_p_evcPlanes',
            'Planes');
        this.puevcPlanes.mandatory = true;
        this.puevcPlanes.dataType = ModelConstants.Planes.name;
        this.puevcPlanes.maxLength = 150;
        this.puevcPlanes.assignCSS();
        this.fields.push(this.puevcPlanes);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Afiliaciones'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisAfiliaciones.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisafiliaciones('SetValue', true);
            this.puthisAfiliaciones.enabled = false;
            this.executeDependecyRulesputhisafiliaciones('SetEnabled', true);
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
            if (lastRole === 'Afiliaciones') {
                this.puthisAfiliaciones.setValue(lastRoleOid);
                this.executeDependecyRulesputhisafiliaciones('SetValue', true);
                this.puthisAfiliaciones.enabled = false;
                this.executeDependecyRulesputhisafiliaciones('SetEnabled', true);
            }
            if (lastRole === 'Planes') {
                this.puevcPlanes.setValue(lastRoleOid);
                this.executeDependecyRulespuevcplanes('SetValue', true);
                this.puevcPlanes.enabled = false;
                this.executeDependecyRulespuevcplanes('SetEnabled', true);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisAfiliaciones'.toLowerCase()) {
            this.puthisAfiliaciones.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisafiliaciones('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'puevcPlanes'.toLowerCase()) {
            this.puevcPlanes.addOids(exchInfo.selectedOids);
            this.executeDependecyRulespuevcplanes('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisAfiliaciones argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisafiliaciones(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisafiliaciones();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisAfiliaciones argument
     */
    private setSuppInfoputhisafiliaciones(): void {

        const displaySetIC = 'UsuarioLDAP';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisAfiliaciones.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Afiliaciones.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisAfiliaciones.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisAfiliaciones.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Afiliaciones.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisAfiliaciones.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_thisAfiliaciones lense search argument
     */
    public onputhisafiliacionesChange(): void {

        const searchText = this.puthisAfiliaciones.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisAfiliaciones.lastText) {
                this.puthisAfiliaciones.removeCSSClass('noResultsLenseSearch');
                this.puthisAfiliaciones.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Afiliaciones.name, 'SIAfiliaciones', searchText, [], null).then(
                        (response: any) => {
                            this.puthisAfiliaciones.removeCSSClass('noResultsLenseSearch');
                            this.puthisAfiliaciones.searchResults = response.results;
                            if (this.puthisAfiliaciones.searchResults &&
                                this.puthisAfiliaciones.searchResults.length === 0) {
                                this.puthisAfiliaciones.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisAfiliaciones.searchResults &&
                                this.puthisAfiliaciones.searchResults.length === 1) {
                                this.processputhisafiliacionesSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisAfiliaciones.removeCSSClass('noResultsLenseSearch');
                            this.puthisAfiliaciones.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisAfiliaciones.removeCSSClass('noResultsLenseSearch');
            this.puthisAfiliaciones.searchResults = [];
            this.cleanputhisafiliaciones();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisAfiliaciones lense search argument
     */
    public processputhisafiliacionesSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisAfiliaciones.searchResults.length > index) {
            selectedInstance = this.puthisAfiliaciones.searchResults[index];
        }
        // Clean the result list
        this.puthisAfiliaciones.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisAfiliaciones.allowMultiSelect) {
                this.puthisAfiliaciones.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisAfiliaciones.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisafiliaciones('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisAfiliaciones lense search argument
     */
    public cleanputhisafiliaciones(): void {
        this.clearValidationMessages();
        this.puthisAfiliaciones.clean();
        this.executeDependecyRulesputhisafiliaciones('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for p_evcPlanes argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespuevcplanes(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfopuevcplanes();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_evcPlanes argument
     */
    private setSuppInfopuevcplanes(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puevcPlanes.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Planes.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puevcPlanes.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puevcPlanes.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Planes.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puevcPlanes.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the p_evcPlanes lense search argument
     */
    public onpuevcplanesChange(): void {

        const searchText = this.puevcPlanes.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puevcPlanes.lastText) {
                const navFilters: string[] = [];
                navFilters.push('Afiliaciones_InsPlan_p_evcPlanes_NavFilter0');
                this.puevcPlanes.removeCSSClass('noResultsLenseSearch');
                this.puevcPlanes.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Planes.name, 'IC_Plan', searchText, navFilters,
                    this.getNavigationFilterVariables()).then(
                        (response: any) => {
                            this.puevcPlanes.removeCSSClass('noResultsLenseSearch');
                            this.puevcPlanes.searchResults = response.results;
                            if (this.puevcPlanes.searchResults &&
                                this.puevcPlanes.searchResults.length === 0) {
                                this.puevcPlanes.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puevcPlanes.searchResults &&
                                this.puevcPlanes.searchResults.length === 1) {
                                this.processpuevcplanesSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puevcPlanes.removeCSSClass('noResultsLenseSearch');
                            this.puevcPlanes.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puevcPlanes.removeCSSClass('noResultsLenseSearch');
            this.puevcPlanes.searchResults = [];
            this.cleanpuevcplanes();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_evcPlanes lense search argument
     */
    public processpuevcplanesSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puevcPlanes.searchResults.length > index) {
            selectedInstance = this.puevcPlanes.searchResults[index];
        }
        // Clean the result list
        this.puevcPlanes.searchResults = [];
        if (selectedInstance) {
            if (!this.puevcPlanes.allowMultiSelect) {
                this.puevcPlanes.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puevcPlanes.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulespuevcplanes('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_evcPlanes lense search argument
     */
    public cleanpuevcplanes(): void {
        this.clearValidationMessages();
        this.puevcPlanes.clean();
        this.executeDependecyRulespuevcplanes('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisAfiliaciones'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisAfiliaciones.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Afiliaciones_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('puevcPlanes'.toLowerCase() === argumentName.toLowerCase()) {
            this.puevcPlanes.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Planes_Obs';
            exchInfo.navigationalFilterIdentity = [];
            exchInfo.navigationalFilterIdentity.push('Afiliaciones_InsPlan_p_evcPlanes_NavFilter0');
            exchInfo.navigationalFilterVariables = this.getNavigationFilterVariables();
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
