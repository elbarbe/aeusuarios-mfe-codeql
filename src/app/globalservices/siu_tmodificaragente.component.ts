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
 * « Implements global SIU SIU_TMODIFICARAGENTE »
 */
@Component({
    selector: 'imes-gs-siu-tmodificaragente',
    templateUrl: './siu_tmodificaragente.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuTMODIFICARAGENTEComponent extends AbstractServiceIU implements OnInit {

    /** Fields */
    public ptuputhisAgente: FieldOVLenseSearch;
    public ptupuPrimerNombre: Field;
    public ptupuSegundoNombre: Field;
    public ptupuPrimerApellido: Field;
    public ptupuSegundoApellido: Field;
    public ptuNuevoRol: FieldOVPreload;
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
        this.idXML = 'IGl_1462447243264368UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuutmodificaragente;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TMODIFICARAGENTE';
        this.title = this.langMng.translateText('gs_TMODIFICARAGENTE',
            'Modificar Agente');

        // Create inbound argument components
        this.ptuputhisAgente = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptupuPrimerNombre = new Field(this.langMng);
        this.ptupuSegundoNombre = new Field(this.langMng);
        this.ptupuPrimerApellido = new Field(this.langMng);
        this.ptupuSegundoApellido = new Field(this.langMng);
        this.ptuNuevoRol = new FieldOVPreload(this.langMng);
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

        this.ptuputhisAgente.nameInRequest = 'pt_p_thisagente';
        this.ptuputhisAgente.alias = this.langMng.translateText(
            'gs_TMODIFICARAGENTE_inArg_pt_p_thisAgente',
            'Usuario');
        this.ptuputhisAgente.mandatory = true;
        this.ptuputhisAgente.dataType = ModelConstants.Funcionario.name;
        this.ptuputhisAgente.maxLength = 200;
        this.ptuputhisAgente.assignCSS();
        this.fields.push(this.ptuputhisAgente);

        this.ptupuPrimerNombre.nameInRequest = 'pt_p_primernombre';
        this.ptupuPrimerNombre.alias = this.langMng.translateText(
            'gs_TMODIFICARAGENTE_inArg_pt_p_PrimerNombre',
            'Primer nombre');
        this.ptupuPrimerNombre.mandatory = true;
        this.ptupuPrimerNombre.dataType = Field.dtString;
        this.ptupuPrimerNombre.maxLength = 50;
        this.ptupuPrimerNombre.assignCSS();
        this.fields.push(this.ptupuPrimerNombre);

        this.ptupuSegundoNombre.nameInRequest = 'pt_p_segundonombre';
        this.ptupuSegundoNombre.alias = this.langMng.translateText(
            'gs_TMODIFICARAGENTE_inArg_pt_p_SegundoNombre',
            'Segundo nombre');
        this.ptupuSegundoNombre.mandatory = false;
        this.ptupuSegundoNombre.dataType = Field.dtString;
        this.ptupuSegundoNombre.maxLength = 50;
        this.ptupuSegundoNombre.assignCSS();
        this.fields.push(this.ptupuSegundoNombre);

        this.ptupuPrimerApellido.nameInRequest = 'pt_p_primerapellido';
        this.ptupuPrimerApellido.alias = this.langMng.translateText(
            'gs_TMODIFICARAGENTE_inArg_pt_p_PrimerApellido',
            'Primer apellido');
        this.ptupuPrimerApellido.mandatory = false;
        this.ptupuPrimerApellido.dataType = Field.dtString;
        this.ptupuPrimerApellido.maxLength = 50;
        this.ptupuPrimerApellido.assignCSS();
        this.fields.push(this.ptupuPrimerApellido);

        this.ptupuSegundoApellido.nameInRequest = 'pt_p_segundoapellido';
        this.ptupuSegundoApellido.alias = this.langMng.translateText(
            'gs_TMODIFICARAGENTE_inArg_pt_p_SegundoApellido',
            'Segundo apellido');
        this.ptupuSegundoApellido.mandatory = false;
        this.ptupuSegundoApellido.dataType = Field.dtString;
        this.ptupuSegundoApellido.maxLength = 50;
        this.ptupuSegundoApellido.assignCSS();
        this.fields.push(this.ptupuSegundoApellido);

        this.ptuNuevoRol.nameInRequest = 'pt_nuevorol';
        this.ptuNuevoRol.alias = this.langMng.translateText(
            'gs_TMODIFICARAGENTE_inArg_pt_NuevoRol',
            'Rol');
        this.ptuNuevoRol.mandatory = true;
        this.ptuNuevoRol.dataType = ModelConstants.Rol.name;
        this.ptuNuevoRol.maxLength = 50;
        this.ptuNuevoRol.assignCSS();
        this.fields.push(this.ptuNuevoRol);

        this.ptupuatrUsuarioLDAP.nameInRequest = 'pt_p_atrusuarioldap';
        this.ptupuatrUsuarioLDAP.alias = this.langMng.translateText(
            'gs_TMODIFICARAGENTE_inArg_pt_p_atrUsuarioLDAP',
            'Usuario LDAP');
        this.ptupuatrUsuarioLDAP.mandatory = false;
        this.ptupuatrUsuarioLDAP.dataType = Field.dtString;
        this.ptupuatrUsuarioLDAP.maxLength = 50;
        this.ptupuatrUsuarioLDAP.assignCSS();
        this.fields.push(this.ptupuatrUsuarioLDAP);

        this.ptupuatrEmail.nameInRequest = 'pt_p_atremail';
        this.ptupuatrEmail.alias = this.langMng.translateText(
            'gs_TMODIFICARAGENTE_inArg_pt_p_atrEmail',
            'Email');
        this.ptupuatrEmail.mandatory = false;
        this.ptupuatrEmail.dataType = Field.dtString;
        this.ptupuatrEmail.maxLength = 100;
        this.ptupuatrEmail.assignCSS();
        this.fields.push(this.ptupuatrEmail);

        this.ptupuagrRegional.nameInRequest = 'pt_p_agrregional';
        this.ptupuagrRegional.alias = this.langMng.translateText(
            'gs_TMODIFICARAGENTE_inArg_pt_p_agrRegional',
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

        // ptuNuevoRol
        const navFiltersptuNuevoRol: string[] = [];
        navFiltersptuNuevoRol.push('TMODIFICARAGENTE_pt_NuevoRol_NavFilter0');
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Rol', 'IC_Rol', navFiltersptuNuevoRol, this.getNavigationFilterVariables(), '').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptuNuevoRol.loadPreload(response.results);
                } else {
                    this.ptuNuevoRol.loadPreload([]);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'ptuputhisAgente'.toLowerCase()) {
            this.ptuputhisAgente.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptuputhisagente('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuagrRegional'.toLowerCase()) {
            this.ptupuagrRegional.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuagrregional('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pt_p_thisAgente argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptuputhisagente(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptuputhisagente();
        }
        if ('SetValue' === event && this.ptuputhisAgente.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptuputhisAgente();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptuputhisAgente();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_thisAgente argument
     */
    private setSuppInfoptuputhisagente(): void {

        const displaySetIC = 'PrimerNombre,SegundoNombre,PrimerApellido,SegundoApellido';
        let numberMissingSupInfo = 0;
        for (const value of this.ptuputhisAgente.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Funcionario.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptuputhisAgente.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptuputhisAgente.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Funcionario.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString, Field.dtString, Field.dtString]);
                    }
                }
                this.ptuputhisAgente.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for pt_p_thisAgente argument
     */
    private executeDependecyRules1ptuputhisAgente(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptuputhisAgente,
                'rol.Identificador,email,usuarioldap,primerapellido,primernombre,segundoapellido,segundonombre');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptuputhisAgenteActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_thisAgente argument
     */
    private executeDependecyRules1ptuputhisAgenteActions(): void {
        const varptuputhisagente = this.getFirstInstanceFromCache(this.ptuputhisAgente);
        // v <> NULL
        if (varptuputhisagente && !this.util.isNull(varptuputhisagente)) {
            // pt_p_thisAgente.SetActive( FALSE )
            this.ptuputhisAgente.enabled = false;
            this.executeDependecyRulesptuputhisagente('SetActive', true);
            // pt_NuevoRol.SetValue( v.rol )
            this.ptuNuevoRol.setValue(this.util.oidBuilder.buildOidRol(
                this.util.getInt(varptuputhisagente.get('rol.Identificador'))));
            this.executeDependecyRulesptunuevorol('SetValue', true);
            // pt_p_atrEmail.SetValue( v.email )
            this.ptupuatrEmail.setValue(varptuputhisagente.get('email'));
            // pt_p_atrUsuarioLDAP.SetValue( v.usuarioldap )
            this.ptupuatrUsuarioLDAP.setValue(varptuputhisagente.get('usuarioldap'));
            // pt_p_PrimerApellido.SetValue( v.primerapellido )
            this.ptupuPrimerApellido.setValue(varptuputhisagente.get('primerapellido'));
            // pt_p_PrimerNombre.SetValue( v.primernombre )
            this.ptupuPrimerNombre.setValue(varptuputhisagente.get('primernombre'));
            // pt_p_SegundoApellido.SetValue( v.segundoapellido )
            this.ptupuSegundoApellido.setValue(varptuputhisagente.get('segundoapellido'));
            // pt_p_SegundoNombre.SetValue( v.segundonombre )
            this.ptupuSegundoNombre.setValue(varptuputhisagente.get('segundonombre'));
            // pt_NuevoRol.SetActive( FALSE )
            this.ptuNuevoRol.enabled = false;
            this.executeDependecyRulesptunuevorol('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_thisAgente argument
     */
    private executeDependecyRules2ptuputhisAgente(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptuputhisAgente,
                'rol.nombre');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptuputhisAgenteActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_thisAgente argument
     */
    private executeDependecyRules2ptuputhisAgenteActions(): void {
        const varptuputhisagente = this.getFirstInstanceFromCache(this.ptuputhisAgente);
        // v <> NULL AND v.rol.nombre = "RESPREGIONAL"
        if (varptuputhisagente && !this.util.isNull(varptuputhisagente) && this.util.valueEquals(varptuputhisagente.get('rol.nombre'),
            'RESPREGIONAL')) {
            // pt_p_agrRegional.SetVisible( FALSE )
            this.ptupuagrRegional.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Process the change in the pt_p_thisAgente lense search argument
     */
    public onptuputhisagenteChange(): void {
        this.executeLenseSearch(this.ptuputhisAgente, ModelConstants.Funcionario.name, 'IC_Agente',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanptuputhisagente();
            }
            if (foundInstances === 1) {
                this.processptuputhisagenteSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_thisAgente lense search argument
     */
    public processptuputhisagenteSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptuputhisAgente.searchResults.length > index) {
            selectedInstance = this.ptuputhisAgente.searchResults[index];
        }
        // Clean the result list
        this.ptuputhisAgente.searchResults = [];
        if (selectedInstance) {
            if (!this.ptuputhisAgente.allowMultiSelect) {
                this.ptuputhisAgente.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptuputhisAgente.addInstances(selectedInstance);
        }
        this.executeDependecyRulesptuputhisagente('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_thisAgente lense search argument
     */
    public cleanptuputhisagente(): void {
        this.clearValidationMessages();
        this.ptuputhisAgente.clean();
        this.executeDependecyRulesptuputhisagente('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_NuevoRol argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptunuevorol(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptuNuevoRol.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptuNuevoRol();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptuNuevoRol();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_NuevoRol argument
     */
    private executeDependecyRules1ptuNuevoRol(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptuNuevoRol,
                'nombre');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptuNuevoRolActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_NuevoRol argument
     */
    private executeDependecyRules1ptuNuevoRolActions(): void {
        const varptunuevorol = this.getFirstInstanceFromCache(this.ptuNuevoRol);
        // v <> NULL AND v.nombre = "RESPREGIONAL"
        if (varptunuevorol && !this.util.isNull(varptunuevorol) && this.util.valueEquals(varptunuevorol.get('nombre'),
            'RESPREGIONAL')) {
            // pt_p_agrRegional.SetVisible( TRUE )
            this.ptupuagrRegional.visible = true;
            // pt_p_agrRegional.SetMandatory( TRUE )
            this.ptupuagrRegional.mandatory = true;
            // pt_p_agrRegional.SetActive( TRUE )
            this.ptupuagrRegional.enabled = true;
            this.executeDependecyRulesptupuagrregional('SetActive', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_NuevoRol argument
     */
    private executeDependecyRules2ptuNuevoRol(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptuNuevoRol,
                'nombre');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptuNuevoRolActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_NuevoRol argument
     */
    private executeDependecyRules2ptuNuevoRolActions(): void {
        const varptunuevorol = this.getFirstInstanceFromCache(this.ptuNuevoRol);
        // v <> NULL AND v.nombre <> "RESPREGIONAL"
        if (varptunuevorol && !this.util.isNull(varptunuevorol) && !this.util.valueEquals(varptunuevorol.get('nombre'),
            'RESPREGIONAL')) {
            // pt_p_agrRegional.SetMandatory( FALSE )
            this.ptupuagrRegional.mandatory = false;
            // pt_p_agrRegional.SetActive( FALSE )
            this.ptupuagrRegional.enabled = false;
            this.executeDependecyRulesptupuagrregional('SetActive', true);
            // pt_p_agrRegional.SetValue( NULL )
            this.ptupuagrRegional.setValue(null);
            this.executeDependecyRulesptupuagrregional('SetValue', true);
            // pt_p_agrRegional.SetVisible( FALSE )
            this.ptupuagrRegional.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_NuevoRol argument
     */
    public onptunuevorolChange(): void {
        this.executeDependecyRulesptunuevorol('SetValue', false);
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
        if ('ptuputhisAgente'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptuputhisAgente.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Funcionario_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptupuagrRegional'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuagrRegional.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Regional_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
