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
    selector: 'imes-agentexproducto-siu-tcrear',
    templateUrl: './siu_tcrear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgentexProductoSIUuTCREARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public ptupuagrProductoT: FieldOVLenseSearch;
    public ptupuagrAsesor: FieldOVLenseSearch;
    public ptupuatrFechaInicio: Field;
    public ptupuatrFechaFin: Field;
    public ptupuatrCodigo: Field;

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
        this.idXML = 'Clas_1460560723968553Ser_8UIServ_1';
        this.className = ModelConstants.Agentexproducto.name;
        this.iuName = ModelConstants.Agentexproducto.siuutcrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TCREAR';
        this.title = this.langMng.translateText('cls_AgentexProducto_svc_TCREAR',
            'Crear');

        // Create inbound argument components
        this.ptupuagrProductoT = new FieldOVLenseSearch(this.langMng);
        this.ptupuagrAsesor = new FieldOVLenseSearch(this.langMng);
        this.ptupuatrFechaInicio = new Field(this.langMng);
        this.ptupuatrFechaFin = new Field(this.langMng);
        this.ptupuatrCodigo = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuagrProductoT.nameInRequest = 'pt_p_agrproductot';
        this.ptupuagrProductoT.alias = this.langMng.translateText(
            'cls_AgentexProducto_svc_TCREAR_inArg_pt_p_agrProductoT',
            'Producto');
        this.ptupuagrProductoT.mandatory = true;
        this.ptupuagrProductoT.dataType = ModelConstants.Productos.name;
        this.ptupuagrProductoT.maxLength = 100;
        this.ptupuagrProductoT.assignCSS();
        this.fields.push(this.ptupuagrProductoT);

        this.ptupuagrAsesor.nameInRequest = 'pt_p_agrasesor';
        this.ptupuagrAsesor.alias = this.langMng.translateText(
            'cls_AgentexProducto_svc_TCREAR_inArg_pt_p_agrAsesor',
            'Asesor');
        this.ptupuagrAsesor.mandatory = true;
        this.ptupuagrAsesor.dataType = ModelConstants.Asesor.name;
        this.ptupuagrAsesor.maxLength = 150;
        this.ptupuagrAsesor.assignCSS();
        this.fields.push(this.ptupuagrAsesor);

        this.ptupuatrFechaInicio.nameInRequest = 'pt_p_atrfechainicio';
        this.ptupuatrFechaInicio.alias = this.langMng.translateText(
            'cls_AgentexProducto_svc_TCREAR_inArg_pt_p_atrFechaInicio',
            'Fecha Inicio');
        this.ptupuatrFechaInicio.mandatory = false;
        this.ptupuatrFechaInicio.dataType = Field.dtDatetime;
        this.ptupuatrFechaInicio.assignCSS();
        this.fields.push(this.ptupuatrFechaInicio);

        this.ptupuatrFechaFin.nameInRequest = 'pt_p_atrfechafin';
        this.ptupuatrFechaFin.alias = this.langMng.translateText(
            'cls_AgentexProducto_svc_TCREAR_inArg_pt_p_atrFechaFin',
            'Fecha Fin');
        this.ptupuatrFechaFin.mandatory = false;
        this.ptupuatrFechaFin.dataType = Field.dtDatetime;
        this.ptupuatrFechaFin.assignCSS();
        this.fields.push(this.ptupuatrFechaFin);

        this.ptupuatrCodigo.nameInRequest = 'pt_p_atrcodigo';
        this.ptupuatrCodigo.alias = this.langMng.translateText(
            'cls_AgentexProducto_svc_TCREAR_inArg_pt_p_atrCodigo',
            'Código');
        this.ptupuatrCodigo.mandatory = true;
        this.ptupuatrCodigo.dataType = Field.dtInt;
        this.ptupuatrCodigo.assignCSS();
        this.fields.push(this.ptupuatrCodigo);
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
            if (lastRole === 'ProductoT') {
                this.ptupuagrProductoT.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrproductot('SetValue', true);
                this.ptupuagrProductoT.enabled = false;
                this.executeDependecyRulesptupuagrproductot('SetEnabled', true);
            }
            if (lastRole === 'Asesor') {
                this.ptupuagrAsesor.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrasesor('SetValue', true);
                this.ptupuagrAsesor.enabled = false;
                this.executeDependecyRulesptupuagrasesor('SetEnabled', true);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuagrProductoT'.toLowerCase()) {
            this.ptupuagrProductoT.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuagrproductot('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuagrAsesor'.toLowerCase()) {
            this.ptupuagrAsesor.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuagrasesor('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pt_p_agrProductoT argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrproductot(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuagrproductot();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_agrProductoT argument
     */
    private setSuppInfoptupuagrproductot(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuagrProductoT.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Productos.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuagrProductoT.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuagrProductoT.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Productos.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptupuagrProductoT.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the pt_p_agrProductoT lense search argument
     */
    public onptupuagrproductotChange(): void {

        const searchText = this.ptupuagrProductoT.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptupuagrProductoT.lastText) {
                this.ptupuagrProductoT.removeCSSClass('noResultsLenseSearch');
                this.ptupuagrProductoT.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Productos.name, 'IC_Producto', searchText, [], null).then(
                        (response: any) => {
                            this.ptupuagrProductoT.removeCSSClass('noResultsLenseSearch');
                            this.ptupuagrProductoT.searchResults = response.results;
                            if (this.ptupuagrProductoT.searchResults &&
                                this.ptupuagrProductoT.searchResults.length === 0) {
                                this.ptupuagrProductoT.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptupuagrProductoT.searchResults &&
                                this.ptupuagrProductoT.searchResults.length === 1) {
                                this.processptupuagrproductotSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptupuagrProductoT.removeCSSClass('noResultsLenseSearch');
                            this.ptupuagrProductoT.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptupuagrProductoT.removeCSSClass('noResultsLenseSearch');
            this.ptupuagrProductoT.searchResults = [];
            this.cleanptupuagrproductot();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_agrProductoT lense search argument
     */
    public processptupuagrproductotSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuagrProductoT.searchResults.length > index) {
            selectedInstance = this.ptupuagrProductoT.searchResults[index];
        }
        // Clean the result list
        this.ptupuagrProductoT.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuagrProductoT.allowMultiSelect) {
                this.ptupuagrProductoT.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuagrProductoT.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptupuagrproductot('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_agrProductoT lense search argument
     */
    public cleanptupuagrproductot(): void {
        this.clearValidationMessages();
        this.ptupuagrProductoT.clean();
        this.executeDependecyRulesptupuagrproductot('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_agrAsesor argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrasesor(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuagrasesor();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_agrAsesor argument
     */
    private setSuppInfoptupuagrasesor(): void {

        const displaySetIC = 'PrimerNombre,SegundoNombre,PrimerApellido';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuagrAsesor.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Asesor.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuagrAsesor.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuagrAsesor.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Asesor.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString, Field.dtString]);
                    }
                }
                this.ptupuagrAsesor.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the pt_p_agrAsesor lense search argument
     */
    public onptupuagrasesorChange(): void {

        const searchText = this.ptupuagrAsesor.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptupuagrAsesor.lastText) {
                this.ptupuagrAsesor.removeCSSClass('noResultsLenseSearch');
                this.ptupuagrAsesor.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Asesor.name, 'IC_Asesor', searchText, [], null).then(
                        (response: any) => {
                            this.ptupuagrAsesor.removeCSSClass('noResultsLenseSearch');
                            this.ptupuagrAsesor.searchResults = response.results;
                            if (this.ptupuagrAsesor.searchResults &&
                                this.ptupuagrAsesor.searchResults.length === 0) {
                                this.ptupuagrAsesor.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptupuagrAsesor.searchResults &&
                                this.ptupuagrAsesor.searchResults.length === 1) {
                                this.processptupuagrasesorSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptupuagrAsesor.removeCSSClass('noResultsLenseSearch');
                            this.ptupuagrAsesor.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptupuagrAsesor.removeCSSClass('noResultsLenseSearch');
            this.ptupuagrAsesor.searchResults = [];
            this.cleanptupuagrasesor();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_agrAsesor lense search argument
     */
    public processptupuagrasesorSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuagrAsesor.searchResults.length > index) {
            selectedInstance = this.ptupuagrAsesor.searchResults[index];
        }
        // Clean the result list
        this.ptupuagrAsesor.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuagrAsesor.allowMultiSelect) {
                this.ptupuagrAsesor.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuagrAsesor.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptupuagrasesor('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_agrAsesor lense search argument
     */
    public cleanptupuagrasesor(): void {
        this.clearValidationMessages();
        this.ptupuagrAsesor.clean();
        this.executeDependecyRulesptupuagrasesor('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('ptupuagrProductoT'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuagrProductoT.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Productos_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptupuagrAsesor'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuagrAsesor.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Asesor_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
