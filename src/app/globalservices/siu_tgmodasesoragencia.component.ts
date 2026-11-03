import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from '../common/app.cachedependencyrules';
import { Field, FieldDefinedSelection, FieldOVLenseSearch, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements global SIU SIU_TGMODASESORAGENCIA »
 */
@Component({
    selector: 'imes-gs-siu-tgmodasesoragencia',
    templateUrl: './siu_tgmodasesoragencia.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuTGMODASESORAGENCIAComponent extends AbstractServiceIU implements OnInit {

    /** Fields */
    public ptuputhisAsesor: FieldOVLenseSearch;
    public ptupuModDBasicosPersona: FieldDefinedSelection;
    public ptupModificaDirector: FieldDefinedSelection;
    public ptuptUsuarioLDAP: Field;
    public ptuptEmail: Field;
    public ptupuPrimerNombre: Field;
    public ptupuSegundoNombre: Field;
    public ptupuPrimerApellido: Field;
    public ptupuSegundoApellido: Field;
    public ptupeNumUsuario: Field;
    public ptuptSucursal: FieldOVLenseSearch;
    public ptuptTipoIdentificacion: FieldOVPreload;
    public ptuptNumIdentificacion: Field;
    public ptupVerDBasicosPersona: FieldDefinedSelection;
    public ptupVerDocsPersona: FieldDefinedSelection;
    public ptupVerContratoNovedad: FieldDefinedSelection;

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
        this.idXML = 'IGl_1475495460864793UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuutgmodasesoragencia;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TGMODASESORAGENCIA';
        this.title = this.langMng.translateText('gs_TGMODASESORAGENCIA',
            'Modificar');

        // Create inbound argument components
        this.ptuputhisAsesor = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptupuModDBasicosPersona = new FieldDefinedSelection(this.langMng);
        this.ptupModificaDirector = new FieldDefinedSelection(this.langMng);
        this.ptuptUsuarioLDAP = new Field(this.langMng);
        this.ptuptEmail = new Field(this.langMng);
        this.ptupuPrimerNombre = new Field(this.langMng);
        this.ptupuSegundoNombre = new Field(this.langMng);
        this.ptupuPrimerApellido = new Field(this.langMng);
        this.ptupuSegundoApellido = new Field(this.langMng);
        this.ptupeNumUsuario = new Field(this.langMng);
        this.ptuptSucursal = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptuptTipoIdentificacion = new FieldOVPreload(this.langMng);
        this.ptuptNumIdentificacion = new Field(this.langMng);
        this.ptupVerDBasicosPersona = new FieldDefinedSelection(this.langMng);
        this.ptupVerDocsPersona = new FieldDefinedSelection(this.langMng);
        this.ptupVerContratoNovedad = new FieldDefinedSelection(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptuputhisAsesor.nameInRequest = 'pt_p_thisasesor';
        this.ptuputhisAsesor.alias = this.langMng.translateText(
            'gs_TGMODASESORAGENCIA_inArg_pt_p_thisAsesor',
            'Asesor');
        this.ptuputhisAsesor.mandatory = true;
        this.ptuputhisAsesor.dataType = ModelConstants.Asesor.name;
        this.ptuputhisAsesor.maxLength = 150;
        this.ptuputhisAsesor.assignCSS();
        this.fields.push(this.ptuputhisAsesor);

        this.ptupuModDBasicosPersona.nameInRequest = 'pt_p_moddbasicospersona';
        this.ptupuModDBasicosPersona.alias = this.langMng.translateText(
            'gs_TGMODASESORAGENCIA_inArg_pt_p_ModDBasicosPersona',
            'Modifica persona?');
        this.ptupuModDBasicosPersona.mandatory = true;
        this.ptupuModDBasicosPersona.dataType = Field.dtBool;
        this.ptupuModDBasicosPersona.options = DefinedSelections.DS_SINO;
        this.ptupuModDBasicosPersona.value = false;
        this.ptupuModDBasicosPersona.assignCSS();
        this.fields.push(this.ptupuModDBasicosPersona);

        this.ptupModificaDirector.nameInRequest = 'pt_pmodificadirector';
        this.ptupModificaDirector.alias = this.langMng.translateText(
            'gs_TGMODASESORAGENCIA_inArg_pt_pModificaDirector',
            'Modifica director?');
        this.ptupModificaDirector.mandatory = true;
        this.ptupModificaDirector.dataType = Field.dtBool;
        this.ptupModificaDirector.options = DefinedSelections.DS_SINO;
        this.ptupModificaDirector.value = false;
        this.ptupModificaDirector.assignCSS();
        this.fields.push(this.ptupModificaDirector);

        this.ptuptUsuarioLDAP.nameInRequest = 'pt_ptusuarioldap';
        this.ptuptUsuarioLDAP.alias = this.langMng.translateText(
            'gs_TGMODASESORAGENCIA_inArg_pt_ptUsuarioLDAP',
            'Usuario LDAP');
        this.ptuptUsuarioLDAP.mandatory = false;
        this.ptuptUsuarioLDAP.dataType = Field.dtString;
        this.ptuptUsuarioLDAP.maxLength = 50;
        this.ptuptUsuarioLDAP.assignCSS();
        this.fields.push(this.ptuptUsuarioLDAP);

        this.ptuptEmail.nameInRequest = 'pt_ptemail';
        this.ptuptEmail.alias = this.langMng.translateText(
            'gs_TGMODASESORAGENCIA_inArg_pt_ptEmail',
            'Email');
        this.ptuptEmail.mandatory = false;
        this.ptuptEmail.dataType = Field.dtString;
        this.ptuptEmail.maxLength = 100;
        this.ptuptEmail.assignCSS();
        this.fields.push(this.ptuptEmail);

        this.ptupuPrimerNombre.nameInRequest = 'pt_p_primernombre';
        this.ptupuPrimerNombre.alias = this.langMng.translateText(
            'gs_TGMODASESORAGENCIA_inArg_pt_p_PrimerNombre',
            'Primer nombre');
        this.ptupuPrimerNombre.mandatory = true;
        this.ptupuPrimerNombre.dataType = Field.dtString;
        this.ptupuPrimerNombre.maxLength = 50;
        this.ptupuPrimerNombre.assignCSS();
        this.fields.push(this.ptupuPrimerNombre);

        this.ptupuSegundoNombre.nameInRequest = 'pt_p_segundonombre';
        this.ptupuSegundoNombre.alias = this.langMng.translateText(
            'gs_TGMODASESORAGENCIA_inArg_pt_p_SegundoNombre',
            'Segundo nombre');
        this.ptupuSegundoNombre.mandatory = false;
        this.ptupuSegundoNombre.dataType = Field.dtString;
        this.ptupuSegundoNombre.maxLength = 50;
        this.ptupuSegundoNombre.assignCSS();
        this.fields.push(this.ptupuSegundoNombre);

        this.ptupuPrimerApellido.nameInRequest = 'pt_p_primerapellido';
        this.ptupuPrimerApellido.alias = this.langMng.translateText(
            'gs_TGMODASESORAGENCIA_inArg_pt_p_PrimerApellido',
            'Primer apellido');
        this.ptupuPrimerApellido.mandatory = false;
        this.ptupuPrimerApellido.dataType = Field.dtString;
        this.ptupuPrimerApellido.maxLength = 50;
        this.ptupuPrimerApellido.assignCSS();
        this.fields.push(this.ptupuPrimerApellido);

        this.ptupuSegundoApellido.nameInRequest = 'pt_p_segundoapellido';
        this.ptupuSegundoApellido.alias = this.langMng.translateText(
            'gs_TGMODASESORAGENCIA_inArg_pt_p_SegundoApellido',
            'Segundo apellido');
        this.ptupuSegundoApellido.mandatory = false;
        this.ptupuSegundoApellido.dataType = Field.dtString;
        this.ptupuSegundoApellido.maxLength = 50;
        this.ptupuSegundoApellido.assignCSS();
        this.fields.push(this.ptupuSegundoApellido);

        this.ptupeNumUsuario.nameInRequest = 'pt_penumusuario';
        this.ptupeNumUsuario.alias = this.langMng.translateText(
            'gs_TGMODASESORAGENCIA_inArg_pt_peNumUsuario',
            'Usuario');
        this.ptupeNumUsuario.mandatory = true;
        this.ptupeNumUsuario.dataType = Field.dtString;
        this.ptupeNumUsuario.maxLength = 50;
        this.ptupeNumUsuario.assignCSS();
        this.fields.push(this.ptupeNumUsuario);

        this.ptuptSucursal.nameInRequest = 'pt_ptsucursal';
        this.ptuptSucursal.alias = this.langMng.translateText(
            'gs_TGMODASESORAGENCIA_inArg_pt_ptSucursal',
            'Sucursal');
        this.ptuptSucursal.mandatory = true;
        this.ptuptSucursal.dataType = ModelConstants.Sucursal.name;
        this.ptuptSucursal.maxLength = 200;
        this.ptuptSucursal.assignCSS();
        this.fields.push(this.ptuptSucursal);

        this.ptuptTipoIdentificacion.nameInRequest = 'pt_pttipoidentificacion';
        this.ptuptTipoIdentificacion.alias = this.langMng.translateText(
            'gs_TGMODASESORAGENCIA_inArg_pt_ptTipoIdentificacion',
            'Tipo Identificación');
        this.ptuptTipoIdentificacion.mandatory = true;
        this.ptuptTipoIdentificacion.dataType = ModelConstants.Tipoidentificacion.name;
        this.ptuptTipoIdentificacion.maxLength = 170;
        this.ptuptTipoIdentificacion.assignCSS();
        this.fields.push(this.ptuptTipoIdentificacion);

        this.ptuptNumIdentificacion.nameInRequest = 'pt_ptnumidentificacion';
        this.ptuptNumIdentificacion.alias = this.langMng.translateText(
            'gs_TGMODASESORAGENCIA_inArg_pt_ptNumIdentificacion',
            'Nº Identificación');
        this.ptuptNumIdentificacion.mandatory = true;
        this.ptuptNumIdentificacion.dataType = Field.dtString;
        this.ptuptNumIdentificacion.maxLength = 60;
        this.ptuptNumIdentificacion.assignCSS();
        this.fields.push(this.ptuptNumIdentificacion);

        this.ptupVerDBasicosPersona.nameInRequest = 'pt_pverdbasicospersona';
        this.ptupVerDBasicosPersona.alias = this.langMng.translateText(
            'gs_TGMODASESORAGENCIA_inArg_pt_pVerDBasicosPersona',
            'Ver datos básicos de usuarios');
        this.ptupVerDBasicosPersona.mandatory = true;
        this.ptupVerDBasicosPersona.dataType = Field.dtBool;
        this.ptupVerDBasicosPersona.options = DefinedSelections.DS_SINO;
        this.ptupVerDBasicosPersona.value = false;
        this.ptupVerDBasicosPersona.assignCSS();
        this.fields.push(this.ptupVerDBasicosPersona);

        this.ptupVerDocsPersona.nameInRequest = 'pt_pverdocspersona';
        this.ptupVerDocsPersona.alias = this.langMng.translateText(
            'gs_TGMODASESORAGENCIA_inArg_pt_pVerDocsPersona',
            'Ver documentos persona');
        this.ptupVerDocsPersona.mandatory = true;
        this.ptupVerDocsPersona.dataType = Field.dtBool;
        this.ptupVerDocsPersona.options = DefinedSelections.DS_SINO;
        this.ptupVerDocsPersona.value = false;
        this.ptupVerDocsPersona.assignCSS();
        this.fields.push(this.ptupVerDocsPersona);

        this.ptupVerContratoNovedad.nameInRequest = 'pt_pvercontratonovedad';
        this.ptupVerContratoNovedad.alias = this.langMng.translateText(
            'gs_TGMODASESORAGENCIA_inArg_pt_pVerContratoNovedad',
            'Ver contrato en Novedades');
        this.ptupVerContratoNovedad.mandatory = true;
        this.ptupVerContratoNovedad.dataType = Field.dtBool;
        this.ptupVerContratoNovedad.options = DefinedSelections.DS_SINO;
        this.ptupVerContratoNovedad.value = false;
        this.ptupVerContratoNovedad.assignCSS();
        this.fields.push(this.ptupVerContratoNovedad);
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptuptTipoIdentificacion
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoIdentificacion', 'IC_TipoIdentificacion', [], null, 'OC_TipoIdentificacion').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptuptTipoIdentificacion.loadPreload(response.results);
                } else {
                    this.ptuptTipoIdentificacion.loadPreload([]);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'ptuputhisAsesor'.toLowerCase()) {
            this.ptuputhisAsesor.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptuputhisasesor('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptuptSucursal'.toLowerCase()) {
            this.ptuptSucursal.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptuptsucursal('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pt_p_thisAsesor argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptuputhisasesor(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptuputhisasesor();
        }
        if ('SetValue' === event && this.ptuputhisAsesor.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptuputhisAsesor();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_thisAsesor argument
     */
    private setSuppInfoptuputhisasesor(): void {

        const displaySetIC = 'PrimerNombre,SegundoNombre,PrimerApellido';
        let numberMissingSupInfo = 0;
        for (const value of this.ptuputhisAsesor.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Asesor.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptuputhisAsesor.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptuputhisAsesor.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Asesor.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString, Field.dtString]);
                    }
                }
                this.ptuputhisAsesor.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for pt_p_thisAsesor argument
     */
    private executeDependecyRules1ptuputhisAsesor(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptuputhisAsesor,
                'moddbasicospersona,primerapellido,primernombre,segundoapellido,segundonombre,usuario,modificadirector,email,usuarioldap' +
                ',sucursal.Codigo,tipoidentificacion.Codigo,numidentificacion,vercontratonovedad,verdbasicospersona' +
                ',verdocidentificacionpersona');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptuputhisAsesorActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_thisAsesor argument
     */
    private executeDependecyRules1ptuputhisAsesorActions(): void {
        const varptuputhisasesor = this.getFirstInstanceFromCache(this.ptuputhisAsesor);
        // v <> NULL
        if (varptuputhisasesor && !this.util.isNull(varptuputhisasesor)) {
            // pt_p_ModDBasicosPersona.SetValue( v.moddbasicospersona )
            this.ptupuModDBasicosPersona.setValue(this.util.getBool(varptuputhisasesor.get('moddbasicospersona')));
            // pt_p_PrimerApellido.SetValue( v.primerapellido )
            this.ptupuPrimerApellido.setValue(varptuputhisasesor.get('primerapellido'));
            // pt_p_PrimerNombre.SetValue( v.primernombre )
            this.ptupuPrimerNombre.setValue(varptuputhisasesor.get('primernombre'));
            // pt_p_SegundoApellido.SetValue( v.segundoapellido )
            this.ptupuSegundoApellido.setValue(varptuputhisasesor.get('segundoapellido'));
            // pt_p_SegundoNombre.SetValue( v.segundonombre )
            this.ptupuSegundoNombre.setValue(varptuputhisasesor.get('segundonombre'));
            // pt_peNumUsuario.SetValue( v.usuario )
            this.ptupeNumUsuario.setValue(varptuputhisasesor.get('usuario'));
            // pt_pModificaDirector.SetValue( v.modificadirector )
            this.ptupModificaDirector.setValue(this.util.getBool(varptuputhisasesor.get('modificadirector')));
            // pt_ptEmail.SetValue( v.email )
            this.ptuptEmail.setValue(varptuputhisasesor.get('email'));
            // pt_ptUsuarioLDAP.SetValue( v.usuarioldap )
            this.ptuptUsuarioLDAP.setValue(varptuputhisasesor.get('usuarioldap'));
            // pt_ptSucursal.SetValue( v.sucursal )
            this.ptuptSucursal.setValue(this.util.oidBuilder.buildOidSucursal(
                this.util.getInt(varptuputhisasesor.get('sucursal.Codigo'))));
            this.executeDependecyRulesptuptsucursal('SetValue', true);
            // pt_p_thisAsesor.SetActive( FALSE )
            this.ptuputhisAsesor.enabled = false;
            this.executeDependecyRulesptuputhisasesor('SetActive', true);
            // pt_ptTipoIdentificacion.SetValue( v.tipoidentificacion )
            this.ptuptTipoIdentificacion.setValue(this.util.oidBuilder.buildOidTipoIdentificacion(
                this.util.getInt(varptuputhisasesor.get('tipoidentificacion.Codigo'))));
            // pt_ptNumIdentificacion.SetValue( v.numidentificacion )
            this.ptuptNumIdentificacion.setValue(varptuputhisasesor.get('numidentificacion'));
            // pt_pVerContratoNovedad.SetValue( v.vercontratonovedad )
            this.ptupVerContratoNovedad.setValue(this.util.getBool(varptuputhisasesor.get('vercontratonovedad')));
            // pt_pVerDBasicosPersona.SetValue( v.verdbasicospersona )
            this.ptupVerDBasicosPersona.setValue(this.util.getBool(varptuputhisasesor.get('verdbasicospersona')));
            // pt_pVerDocsPersona.SetValue( v.verdocidentificacionpersona )
            this.ptupVerDocsPersona.setValue(this.util.getBool(varptuputhisasesor.get('verdocidentificacionpersona')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Process the change in the pt_p_thisAsesor lense search argument
     */
    public onptuputhisasesorChange(): void {
        this.executeLenseSearch(this.ptuputhisAsesor, ModelConstants.Asesor.name, 'IC_Asesor',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanptuputhisasesor();
            }
            if (foundInstances === 1) {
                this.processptuputhisasesorSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_thisAsesor lense search argument
     */
    public processptuputhisasesorSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptuputhisAsesor.searchResults.length > index) {
            selectedInstance = this.ptuputhisAsesor.searchResults[index];
        }
        // Clean the result list
        this.ptuputhisAsesor.searchResults = [];
        if (selectedInstance) {
            if (!this.ptuputhisAsesor.allowMultiSelect) {
                this.ptuputhisAsesor.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptuputhisAsesor.addInstances(selectedInstance);
        }
        this.executeDependecyRulesptuputhisasesor('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_thisAsesor lense search argument
     */
    public cleanptuputhisasesor(): void {
        this.clearValidationMessages();
        this.ptuputhisAsesor.clean();
        this.executeDependecyRulesptuputhisasesor('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_ptSucursal argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptuptsucursal(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptuptsucursal();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_ptSucursal argument
     */
    private setSuppInfoptuptsucursal(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptuptSucursal.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Sucursal.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptuptSucursal.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptuptSucursal.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Sucursal.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptuptSucursal.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Process the change in the pt_ptSucursal lense search argument
     */
    public onptuptsucursalChange(): void {
        this.executeLenseSearch(this.ptuptSucursal, ModelConstants.Sucursal.name, 'IC_Sucursal',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanptuptsucursal();
            }
            if (foundInstances === 1) {
                this.processptuptsucursalSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_ptSucursal lense search argument
     */
    public processptuptsucursalSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptuptSucursal.searchResults.length > index) {
            selectedInstance = this.ptuptSucursal.searchResults[index];
        }
        // Clean the result list
        this.ptuptSucursal.searchResults = [];
        if (selectedInstance) {
            if (!this.ptuptSucursal.allowMultiSelect) {
                this.ptuptSucursal.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptuptSucursal.addInstances(selectedInstance);
        }
        this.executeDependecyRulesptuptsucursal('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_ptSucursal lense search argument
     */
    public cleanptuptsucursal(): void {
        this.clearValidationMessages();
        this.ptuptSucursal.clean();
        this.executeDependecyRulesptuptsucursal('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('ptuputhisAsesor'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptuputhisAsesor.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Asesor_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptuptSucursal'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptuptSucursal.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Sucursal_Obs';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Returns true if all elements contained in the group are visible
     * @param groupId Group id.
     */
    public isGroupVisible(groupId: string): boolean {
        let isVisible;

        if (groupId === '2') {
            isVisible = this.ptuptTipoIdentificacion.visible ||
                this.ptuptNumIdentificacion.visible ||
                this.ptupeNumUsuario.visible ||
                this.ptupuPrimerNombre.visible ||
                this.ptupuSegundoNombre.visible ||
                this.ptupuPrimerApellido.visible ||
                this.ptupuSegundoApellido.visible ||
                this.ptuptEmail.visible ||
                this.ptuptUsuarioLDAP.visible;
        }
        if (groupId === '3') {
            isVisible = this.ptupuModDBasicosPersona.visible ||
                this.ptupModificaDirector.visible ||
                this.ptupVerDBasicosPersona.visible ||
                this.ptupVerDocsPersona.visible ||
                this.ptupVerContratoNovedad.visible;
        }
        return isVisible;
    }

    /**
     * Returns the alias group
     * @param groupId Group id
     */
    public getGroupAlias(groupId: string): string {
        let alias = '';

        if (groupId === '2') {
            alias = this.langMng.translateText('2',
                'Datos básicos');
        }
        if (groupId === '3') {
            alias = this.langMng.translateText('3',
                'Datos control');
        }
        return alias;
    }
}
