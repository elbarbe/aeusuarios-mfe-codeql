import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from '../common/app.cachedependencyrules';
import { Field, FieldOVLenseSearch, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements global SIU SIU_TCREARAGENTE »
 */
@Component({
    selector: 'imes-gs-siu-tcrearagente',
    templateUrl: './siu_tcrearagente.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuTCREARAGENTEComponent extends AbstractServiceIU implements OnInit {

    /** Fields */
    public ptupuagrRol: FieldOVPreload;
    public ptupuatrUsuario: Field;
    public ptupuatrPrimerNombre: Field;
    public ptupuatrSegundoNombre: Field;
    public ptupuatrPrimerApellido: Field;
    public ptupuatrSegundoApellido: Field;
    public ptupuagrSucursal: FieldOVLenseSearch;
    public ptupuatrUsuarioLDAP: Field;
    public ptupuatrEmail: Field;
    public ptupuagrRegional: FieldOVLenseSearch;

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
        this.idXML = 'IGl_1462447112192088UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuutcrearagente;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TCREARAGENTE';
        this.title = this.langMng.translateText('gs_TCREARAGENTE',
            'Crear');

        // Create inbound argument components
        this.ptupuagrRol = new FieldOVPreload(this.langMng);
        this.ptupuatrUsuario = new Field(this.langMng);
        this.ptupuatrPrimerNombre = new Field(this.langMng);
        this.ptupuatrSegundoNombre = new Field(this.langMng);
        this.ptupuatrPrimerApellido = new Field(this.langMng);
        this.ptupuatrSegundoApellido = new Field(this.langMng);
        this.ptupuagrSucursal = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptupuatrUsuarioLDAP = new Field(this.langMng);
        this.ptupuatrEmail = new Field(this.langMng);
        this.ptupuagrRegional = new FieldOVLenseSearch(this.langMng, this.util);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuagrRol.nameInRequest = 'pt_p_agrrol';
        this.ptupuagrRol.alias = this.langMng.translateText(
            'gs_TCREARAGENTE_inArg_pt_p_agrRol',
            'Rol');
        this.ptupuagrRol.mandatory = true;
        this.ptupuagrRol.dataType = ModelConstants.Rol.name;
        this.ptupuagrRol.maxLength = 50;
        this.ptupuagrRol.assignCSS();
        this.fields.push(this.ptupuagrRol);

        this.ptupuatrUsuario.nameInRequest = 'pt_p_atrusuario';
        this.ptupuatrUsuario.alias = this.langMng.translateText(
            'gs_TCREARAGENTE_inArg_pt_p_atrUsuario',
            'Usuario');
        this.ptupuatrUsuario.mandatory = true;
        this.ptupuatrUsuario.dataType = Field.dtString;
        this.ptupuatrUsuario.maxLength = 50;
        this.ptupuatrUsuario.assignCSS();
        this.fields.push(this.ptupuatrUsuario);

        this.ptupuatrPrimerNombre.nameInRequest = 'pt_p_atrprimernombre';
        this.ptupuatrPrimerNombre.alias = this.langMng.translateText(
            'gs_TCREARAGENTE_inArg_pt_p_atrPrimerNombre',
            'Primer nombre');
        this.ptupuatrPrimerNombre.mandatory = true;
        this.ptupuatrPrimerNombre.dataType = Field.dtString;
        this.ptupuatrPrimerNombre.maxLength = 50;
        this.ptupuatrPrimerNombre.assignCSS();
        this.fields.push(this.ptupuatrPrimerNombre);

        this.ptupuatrSegundoNombre.nameInRequest = 'pt_p_atrsegundonombre';
        this.ptupuatrSegundoNombre.alias = this.langMng.translateText(
            'gs_TCREARAGENTE_inArg_pt_p_atrSegundoNombre',
            'Segundo nombre');
        this.ptupuatrSegundoNombre.mandatory = false;
        this.ptupuatrSegundoNombre.dataType = Field.dtString;
        this.ptupuatrSegundoNombre.maxLength = 50;
        this.ptupuatrSegundoNombre.assignCSS();
        this.fields.push(this.ptupuatrSegundoNombre);

        this.ptupuatrPrimerApellido.nameInRequest = 'pt_p_atrprimerapellido';
        this.ptupuatrPrimerApellido.alias = this.langMng.translateText(
            'gs_TCREARAGENTE_inArg_pt_p_atrPrimerApellido',
            'Primer apellido');
        this.ptupuatrPrimerApellido.mandatory = false;
        this.ptupuatrPrimerApellido.dataType = Field.dtString;
        this.ptupuatrPrimerApellido.maxLength = 50;
        this.ptupuatrPrimerApellido.assignCSS();
        this.fields.push(this.ptupuatrPrimerApellido);

        this.ptupuatrSegundoApellido.nameInRequest = 'pt_p_atrsegundoapellido';
        this.ptupuatrSegundoApellido.alias = this.langMng.translateText(
            'gs_TCREARAGENTE_inArg_pt_p_atrSegundoApellido',
            'Segundo apellido');
        this.ptupuatrSegundoApellido.mandatory = false;
        this.ptupuatrSegundoApellido.dataType = Field.dtString;
        this.ptupuatrSegundoApellido.maxLength = 50;
        this.ptupuatrSegundoApellido.assignCSS();
        this.fields.push(this.ptupuatrSegundoApellido);

        this.ptupuagrSucursal.nameInRequest = 'pt_p_agrsucursal';
        this.ptupuagrSucursal.alias = this.langMng.translateText(
            'gs_TCREARAGENTE_inArg_pt_p_agrSucursal',
            'Sucursal');
        this.ptupuagrSucursal.mandatory = true;
        this.ptupuagrSucursal.dataType = ModelConstants.Sucursal.name;
        this.ptupuagrSucursal.maxLength = 200;
        this.ptupuagrSucursal.assignCSS();
        this.fields.push(this.ptupuagrSucursal);

        this.ptupuatrUsuarioLDAP.nameInRequest = 'pt_p_atrusuarioldap';
        this.ptupuatrUsuarioLDAP.alias = this.langMng.translateText(
            'gs_TCREARAGENTE_inArg_pt_p_atrUsuarioLDAP',
            'Usuario LDAP');
        this.ptupuatrUsuarioLDAP.mandatory = false;
        this.ptupuatrUsuarioLDAP.dataType = Field.dtString;
        this.ptupuatrUsuarioLDAP.maxLength = 50;
        this.ptupuatrUsuarioLDAP.assignCSS();
        this.fields.push(this.ptupuatrUsuarioLDAP);

        this.ptupuatrEmail.nameInRequest = 'pt_p_atremail';
        this.ptupuatrEmail.alias = this.langMng.translateText(
            'gs_TCREARAGENTE_inArg_pt_p_atrEmail',
            'Email');
        this.ptupuatrEmail.mandatory = false;
        this.ptupuatrEmail.dataType = Field.dtString;
        this.ptupuatrEmail.maxLength = 100;
        this.ptupuatrEmail.assignCSS();
        this.fields.push(this.ptupuatrEmail);

        this.ptupuagrRegional.nameInRequest = 'pt_p_agrregional';
        this.ptupuagrRegional.alias = this.langMng.translateText(
            'gs_TCREARAGENTE_inArg_pt_p_agrRegional',
            'Regional');
        this.ptupuagrRegional.mandatory = false;
        this.ptupuagrRegional.dataType = ModelConstants.Regional.name;
        this.ptupuagrRegional.maxLength = 150;
        this.ptupuagrRegional.assignCSS();
        this.fields.push(this.ptupuagrRegional);
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuagrRol
        const navFiltersptupuagrRol: string[] = [];
        navFiltersptupuagrRol.push('TCREARAGENTE_pt_p_agrRol_NavFilter0');
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Rol', 'IC_Rol', navFiltersptupuagrRol, this.getNavigationFilterVariables(), '').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrRol.loadPreload(response.results);
                } else {
                    this.ptupuagrRol.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuagrSucursal'.toLowerCase()) {
            this.ptupuagrSucursal.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuagrsucursal('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuagrRegional'.toLowerCase()) {
            this.ptupuagrRegional.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuagrregional('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pt_p_agrRol argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrrol(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptupuagrRol.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuagrRol();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuagrRol();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_agrRol argument
     */
    private executeDependecyRules1ptupuagrRol(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrRol,
                'nombre');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuagrRolActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_agrRol argument
     */
    private executeDependecyRules1ptupuagrRolActions(): void {
        const varptupuagrrol = this.getFirstInstanceFromCache(this.ptupuagrRol);
        // v <> NULL AND v.nombre = "RESPREGIONAL"
        if (varptupuagrrol && !this.util.isNull(varptupuagrrol) && this.util.valueEquals(varptupuagrrol.get('nombre'),
            'RESPREGIONAL')) {
            // pt_p_agrRegional.SetActive( TRUE )
            this.ptupuagrRegional.enabled = true;
            this.executeDependecyRulesptupuagrregional('SetActive', true);
            // pt_p_agrRegional.SetMandatory( TRUE )
            this.ptupuagrRegional.mandatory = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_agrRol argument
     */
    private executeDependecyRules2ptupuagrRol(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrRol,
                'nombre');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptupuagrRolActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_agrRol argument
     */
    private executeDependecyRules2ptupuagrRolActions(): void {
        const varptupuagrrol = this.getFirstInstanceFromCache(this.ptupuagrRol);
        // v <> NULL AND v.nombre <> "RESPREGIONAL"
        if (varptupuagrrol && !this.util.isNull(varptupuagrrol) && !this.util.valueEquals(varptupuagrrol.get('nombre'),
            'RESPREGIONAL')) {
            // pt_p_agrRegional.SetActive( FALSE )
            this.ptupuagrRegional.enabled = false;
            this.executeDependecyRulesptupuagrregional('SetActive', true);
            // pt_p_agrRegional.SetMandatory( FALSE )
            this.ptupuagrRegional.mandatory = false;
            // pt_p_agrRegional.SetValue( NULL )
            this.ptupuagrRegional.setValue(null);
            this.executeDependecyRulesptupuagrregional('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_agrRol argument
     */
    public onptupuagrrolChange(): void {
        this.executeDependecyRulesptupuagrrol('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_agrSucursal argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrsucursal(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuagrsucursal();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_agrSucursal argument
     */
    private setSuppInfoptupuagrsucursal(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuagrSucursal.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Sucursal.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuagrSucursal.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuagrSucursal.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Sucursal.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptupuagrSucursal.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Process the change in the pt_p_agrSucursal lense search argument
     */
    public onptupuagrsucursalChange(): void {
        this.executeLenseSearch(this.ptupuagrSucursal, ModelConstants.Sucursal.name, 'IC_Sucursal',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanptupuagrsucursal();
            }
            if (foundInstances === 1) {
                this.processptupuagrsucursalSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_agrSucursal lense search argument
     */
    public processptupuagrsucursalSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuagrSucursal.searchResults.length > index) {
            selectedInstance = this.ptupuagrSucursal.searchResults[index];
        }
        // Clean the result list
        this.ptupuagrSucursal.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuagrSucursal.allowMultiSelect) {
                this.ptupuagrSucursal.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuagrSucursal.addInstances(selectedInstance);
        }
        this.executeDependecyRulesptupuagrsucursal('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_agrSucursal lense search argument
     */
    public cleanptupuagrsucursal(): void {
        this.clearValidationMessages();
        this.ptupuagrSucursal.clean();
        this.executeDependecyRulesptupuagrsucursal('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_agrRegional argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrregional(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuagrregional();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_agrRegional argument
     */
    private setSuppInfoptupuagrregional(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuagrRegional.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Regional.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuagrRegional.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuagrRegional.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Regional.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptupuagrRegional.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Process the change in the pt_p_agrRegional lense search argument
     */
    public onptupuagrregionalChange(): void {
        this.executeLenseSearch(this.ptupuagrRegional, ModelConstants.Regional.name, 'IC_Regional',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanptupuagrregional();
            }
            if (foundInstances === 1) {
                this.processptupuagrregionalSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_agrRegional lense search argument
     */
    public processptupuagrregionalSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuagrRegional.searchResults.length > index) {
            selectedInstance = this.ptupuagrRegional.searchResults[index];
        }
        // Clean the result list
        this.ptupuagrRegional.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuagrRegional.allowMultiSelect) {
                this.ptupuagrRegional.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuagrRegional.addInstances(selectedInstance);
        }
        this.executeDependecyRulesptupuagrregional('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_agrRegional lense search argument
     */
    public cleanptupuagrregional(): void {
        this.clearValidationMessages();
        this.ptupuagrRegional.clean();
        this.executeDependecyRulesptupuagrregional('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('ptupuagrSucursal'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuagrSucursal.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Sucursal_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptupuagrRegional'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuagrRegional.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Regional_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
