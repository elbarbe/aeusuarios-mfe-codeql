import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVLense, FieldOVLenseSearch } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-agentexproducto-siu-tdeldominio',
    templateUrl: './siu_tdeldominio.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgentexProductoSIUuTDELDOMINIOComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisAgentexProducto: FieldOVLense;
    public ptupuevcDominio: FieldOVLenseSearch;

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
        this.idXML = 'Clas_1460560723968553Ser_12UIServ_1';
        this.className = ModelConstants.Agentexproducto.name;
        this.iuName = ModelConstants.Agentexproducto.siuutdeldominio;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TDELDOMINIO';
        this.title = this.langMng.translateText('cls_AgentexProducto_svc_TDELDOMINIO',
            'Quitar Dominio');

        // Create inbound argument components
        this.puthisAgentexProducto = new FieldOVLense(this.langMng);
        this.ptupuevcDominio = new FieldOVLenseSearch(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisAgentexProducto.nameInRequest = 'p_thisagentexproducto';
        this.puthisAgentexProducto.alias = this.langMng.translateText(
            'cls_AgentexProducto_svc_TDELDOMINIO_inArg_p_thisAgentexProducto',
            'Agente x Producto');
        this.puthisAgentexProducto.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisAgentexProducto.mandatory = true;
        this.puthisAgentexProducto.dataType = ModelConstants.Agentexproducto.name;
        this.puthisAgentexProducto.oidFields = Array(2);
        this.puthisAgentexProducto.oidFieldsTypes = ['autonumerico', 'autonumerico'];
        this.puthisAgentexProducto.assignCSS();
        this.fields.push(this.puthisAgentexProducto);

        this.ptupuevcDominio.nameInRequest = 'pt_p_evcdominio';
        this.ptupuevcDominio.alias = this.langMng.translateText(
            'cls_AgentexProducto_svc_TDELDOMINIO_inArg_pt_p_evcDominio',
            'Dominios');
        this.ptupuevcDominio.mandatory = true;
        this.ptupuevcDominio.dataType = ModelConstants.Dominio.name;
        this.ptupuevcDominio.maxLength = 250;
        this.ptupuevcDominio.assignCSS();
        this.fields.push(this.ptupuevcDominio);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['AgentexProducto'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisAgentexProducto.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisAgentexProducto();
            this.executeDependecyRulesputhisagentexproducto('SetValue', true);
            this.puthisAgentexProducto.enabled = false;
            this.executeDependecyRulesputhisagentexproducto('SetEnabled', true);
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
            if (lastRole === 'Dominios') {
                this.ptupuevcDominio.setValue(lastRoleOid);
                this.executeDependecyRulesptupuevcdominio('SetValue', true);
                this.ptupuevcDominio.enabled = false;
                this.executeDependecyRulesptupuevcdominio('SetEnabled', true);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisAgentexProducto'.toLowerCase()) {
            this.puthisAgentexProducto.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisAgentexProducto();
            this.executeDependecyRulesputhisagentexproducto('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuevcDominio'.toLowerCase()) {
            this.ptupuevcDominio.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuevcdominio('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisAgentexProducto argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisagentexproducto(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisagentexproducto();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisAgentexProducto argument
     */
    private setSuppInfoputhisagentexproducto(): void {

        const displaySetIC = 'Asesor.drvNombreCompleto,ProductoT.Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisAgentexProducto.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Agentexproducto.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisAgentexProducto();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisAgentexProducto.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Agentexproducto.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.setOidFieldsValueputhisAgentexProducto();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisAgentexProducto lense argument
    */
    private setOidFieldsValueputhisAgentexProducto(): void {
        if (this.puthisAgentexProducto.getSelectedInstances().length > 0) {
            if (this.puthisAgentexProducto.getSelectedInstances().length > 1) {
                this.puthisAgentexProducto.oidFields = [null];
                this.puthisAgentexProducto.editorsEnabled = false;
                this.puthisAgentexProducto.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisAgentexProducto.getSelectedInstances().length.toString());
            } else {
                this.puthisAgentexProducto.editorsEnabled = true;
                this.puthisAgentexProducto.oidFields[0] = this.puthisAgentexProducto.getSelectedInstances()[0].oid.asesor_id;
                this.puthisAgentexProducto.oidFields[1] = this.puthisAgentexProducto.getSelectedInstances()[0].oid.id;
                this.puthisAgentexProducto.supplementaryInfo = this.puthisAgentexProducto.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisAgentexProducto.oidFields = Array(2);
            this.puthisAgentexProducto.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisAgentexProducto lense argument
     */
    public onputhisagentexproductoChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisAgentexProducto.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisAgentexProducto.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            asesor_id: this.puthisAgentexProducto.oidFields[0]
            , id: this.puthisAgentexProducto.oidFields[1]
            };
            this.puthisAgentexProducto.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Agentexproducto.name, oid,
                'Asesor.drvNombreCompleto,ProductoT.Descripcion');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisAgentexProducto.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Agentexproducto.name, value.oid)) {
                        this.puthisAgentexProducto.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisAgentexProducto.alias));
                        this.puthisAgentexProducto.cleanSelectedInstances();
                        this.puthisAgentexProducto.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhisagentexproducto('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisAgentexProducto argument value
     */
    public cleanputhisagentexproducto(): void {
        this.clearValidationMessages();
        this.puthisAgentexProducto.clean();
        this.puthisAgentexProducto.oidFields = Array(2);
        this.executeDependecyRulesputhisagentexproducto('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_evcDominio argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuevcdominio(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuevcdominio();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_evcDominio argument
     */
    private setSuppInfoptupuevcdominio(): void {

        const displaySetIC = 'ProductoT.Descripcion,PlanT.Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuevcDominio.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Dominio.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuevcDominio.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuevcDominio.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Dominio.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString]);
                    }
                }
                this.ptupuevcDominio.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the pt_p_evcDominio lense search argument
     */
    public onptupuevcdominioChange(): void {

        const searchText = this.ptupuevcDominio.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptupuevcDominio.lastText) {
                this.ptupuevcDominio.removeCSSClass('noResultsLenseSearch');
                this.ptupuevcDominio.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Dominio.name, 'IC_Dominio', searchText, [], null).then(
                        (response: any) => {
                            this.ptupuevcDominio.removeCSSClass('noResultsLenseSearch');
                            this.ptupuevcDominio.searchResults = response.results;
                            if (this.ptupuevcDominio.searchResults &&
                                this.ptupuevcDominio.searchResults.length === 0) {
                                this.ptupuevcDominio.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptupuevcDominio.searchResults &&
                                this.ptupuevcDominio.searchResults.length === 1) {
                                this.processptupuevcdominioSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptupuevcDominio.removeCSSClass('noResultsLenseSearch');
                            this.ptupuevcDominio.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptupuevcDominio.removeCSSClass('noResultsLenseSearch');
            this.ptupuevcDominio.searchResults = [];
            this.cleanptupuevcdominio();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_evcDominio lense search argument
     */
    public processptupuevcdominioSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuevcDominio.searchResults.length > index) {
            selectedInstance = this.ptupuevcDominio.searchResults[index];
        }
        // Clean the result list
        this.ptupuevcDominio.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuevcDominio.allowMultiSelect) {
                this.ptupuevcDominio.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuevcDominio.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptupuevcdominio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_evcDominio lense search argument
     */
    public cleanptupuevcdominio(): void {
        this.clearValidationMessages();
        this.ptupuevcDominio.clean();
        this.executeDependecyRulesptupuevcdominio('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisAgentexProducto'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisAgentexProducto.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_AgentexProducto';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptupuevcDominio'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuevcDominio.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Dominio_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
