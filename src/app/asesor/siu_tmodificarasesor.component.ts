import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVLenseSearch } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-asesor-siu-tmodificarasesor',
    templateUrl: './siu_tmodificarasesor.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsesorSIUuTMODIFICARASESORComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisAsesor: FieldOVLenseSearch;
    public ptupuModDBasicosPersona: FieldDefinedSelection;
    public pModificaDirector: FieldDefinedSelection;
    public ptUsuarioLDAP: Field;
    public ptEmail: Field;
    public peIntegral: FieldDefinedSelection;
    public ptupVerDBasicosPersona: FieldDefinedSelection;
    public ptupVerDocsPersona: FieldDefinedSelection;
    public ptupVerContratoNovedad: FieldDefinedSelection;
    public ptValidadorUsuarios: FieldDefinedSelection;

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
        this.idXML = 'Clas_1431886233600794Ser_13UIServ_1';
        this.className = ModelConstants.Asesor.name;
        this.iuName = ModelConstants.Asesor.siuutmodificarasesor;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TMODIFICARASESOR';
        this.title = this.langMng.translateText('cls_Asesor_svc_TMODIFICARASESOR',
            'Modificar asesor');

        // Create inbound argument components
        this.puthisAsesor = new FieldOVLenseSearch(this.langMng);
        this.ptupuModDBasicosPersona = new FieldDefinedSelection(this.langMng);
        this.pModificaDirector = new FieldDefinedSelection(this.langMng);
        this.ptUsuarioLDAP = new Field(this.langMng);
        this.ptEmail = new Field(this.langMng);
        this.peIntegral = new FieldDefinedSelection(this.langMng);
        this.ptupVerDBasicosPersona = new FieldDefinedSelection(this.langMng);
        this.ptupVerDocsPersona = new FieldDefinedSelection(this.langMng);
        this.ptupVerContratoNovedad = new FieldDefinedSelection(this.langMng);
        this.ptValidadorUsuarios = new FieldDefinedSelection(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisAsesor.nameInRequest = 'p_thisasesor';
        this.puthisAsesor.alias = this.langMng.translateText(
            'cls_Asesor_svc_TMODIFICARASESOR_inArg_p_thisAsesor',
            'Asesor');
        this.puthisAsesor.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisAsesor.mandatory = true;
        this.puthisAsesor.dataType = ModelConstants.Asesor.name;
        this.puthisAsesor.maxLength = 150;
        this.puthisAsesor.assignCSS();
        this.fields.push(this.puthisAsesor);

        this.ptupuModDBasicosPersona.nameInRequest = 'pt_p_moddbasicospersona';
        this.ptupuModDBasicosPersona.alias = this.langMng.translateText(
            'cls_Asesor_svc_TMODIFICARASESOR_inArg_pt_p_ModDBasicosPersona',
            'Puede modificar persona?');
        this.ptupuModDBasicosPersona.mandatory = true;
        this.ptupuModDBasicosPersona.dataType = Field.dtBool;
        this.ptupuModDBasicosPersona.options = DefinedSelections.DS_SINO;
        this.ptupuModDBasicosPersona.value = false;
        this.ptupuModDBasicosPersona.assignCSS();
        this.fields.push(this.ptupuModDBasicosPersona);

        this.pModificaDirector.nameInRequest = 'pmodificadirector';
        this.pModificaDirector.alias = this.langMng.translateText(
            'cls_Asesor_svc_TMODIFICARASESOR_inArg_pModificaDirector',
            'Modifica director?');
        this.pModificaDirector.mandatory = true;
        this.pModificaDirector.dataType = Field.dtBool;
        this.pModificaDirector.options = DefinedSelections.DS_SINO;
        this.pModificaDirector.value = false;
        this.pModificaDirector.assignCSS();
        this.fields.push(this.pModificaDirector);

        this.ptUsuarioLDAP.nameInRequest = 'ptusuarioldap';
        this.ptUsuarioLDAP.alias = this.langMng.translateText(
            'cls_Asesor_svc_TMODIFICARASESOR_inArg_ptUsuarioLDAP',
            'Usuario LDAP');
        this.ptUsuarioLDAP.mandatory = false;
        this.ptUsuarioLDAP.dataType = Field.dtString;
        this.ptUsuarioLDAP.maxLength = 50;
        this.ptUsuarioLDAP.assignCSS();
        this.fields.push(this.ptUsuarioLDAP);

        this.ptEmail.nameInRequest = 'ptemail';
        this.ptEmail.alias = this.langMng.translateText(
            'cls_Asesor_svc_TMODIFICARASESOR_inArg_ptEmail',
            'Email');
        this.ptEmail.mandatory = false;
        this.ptEmail.dataType = Field.dtString;
        this.ptEmail.maxLength = 100;
        this.ptEmail.assignCSS();
        this.fields.push(this.ptEmail);

        this.peIntegral.nameInRequest = 'peintegral';
        this.peIntegral.alias = this.langMng.translateText(
            'cls_Asesor_svc_TMODIFICARASESOR_inArg_peIntegral',
            'Asesor Integral');
        this.peIntegral.mandatory = true;
        this.peIntegral.dataType = Field.dtBool;
        this.peIntegral.options = DefinedSelections.DS_SINO;
        this.peIntegral.value = false;
        this.peIntegral.assignCSS();
        this.fields.push(this.peIntegral);

        this.ptupVerDBasicosPersona.nameInRequest = 'pt_pverdbasicospersona';
        this.ptupVerDBasicosPersona.alias = this.langMng.translateText(
            'cls_Asesor_svc_TMODIFICARASESOR_inArg_pt_pVerDBasicosPersona',
            'Ver datos básicos de usuarios');
        this.ptupVerDBasicosPersona.mandatory = true;
        this.ptupVerDBasicosPersona.dataType = Field.dtBool;
        this.ptupVerDBasicosPersona.options = DefinedSelections.DS_SINO;
        this.ptupVerDBasicosPersona.value = false;
        this.ptupVerDBasicosPersona.assignCSS();
        this.fields.push(this.ptupVerDBasicosPersona);

        this.ptupVerDocsPersona.nameInRequest = 'pt_pverdocspersona';
        this.ptupVerDocsPersona.alias = this.langMng.translateText(
            'cls_Asesor_svc_TMODIFICARASESOR_inArg_pt_pVerDocsPersona',
            'Ver documentos persona');
        this.ptupVerDocsPersona.mandatory = true;
        this.ptupVerDocsPersona.dataType = Field.dtBool;
        this.ptupVerDocsPersona.options = DefinedSelections.DS_SINO;
        this.ptupVerDocsPersona.value = false;
        this.ptupVerDocsPersona.assignCSS();
        this.fields.push(this.ptupVerDocsPersona);

        this.ptupVerContratoNovedad.nameInRequest = 'pt_pvercontratonovedad';
        this.ptupVerContratoNovedad.alias = this.langMng.translateText(
            'cls_Asesor_svc_TMODIFICARASESOR_inArg_pt_pVerContratoNovedad',
            'Ver contrato en Novedades');
        this.ptupVerContratoNovedad.mandatory = true;
        this.ptupVerContratoNovedad.dataType = Field.dtBool;
        this.ptupVerContratoNovedad.options = DefinedSelections.DS_SINO;
        this.ptupVerContratoNovedad.value = false;
        this.ptupVerContratoNovedad.assignCSS();
        this.fields.push(this.ptupVerContratoNovedad);

        this.ptValidadorUsuarios.nameInRequest = 'ptvalidadorusuarios';
        this.ptValidadorUsuarios.alias = this.langMng.translateText(
            'cls_Asesor_svc_TMODIFICARASESOR_inArg_ptValidadorUsuarios',
            'Acceso validador usuarios');
        this.ptValidadorUsuarios.mandatory = true;
        this.ptValidadorUsuarios.dataType = Field.dtBool;
        this.ptValidadorUsuarios.options = DefinedSelections.DS_SINO;
        this.ptValidadorUsuarios.value = false;
        this.ptValidadorUsuarios.assignCSS();
        this.fields.push(this.ptValidadorUsuarios);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['Asesor'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisAsesor.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisasesor('SetValue', true);
            this.puthisAsesor.enabled = false;
            this.executeDependecyRulesputhisasesor('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisAsesor'.toLowerCase()) {
            this.puthisAsesor.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisasesor('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisAsesor argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisasesor(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisasesor();
        }
        if ('SetValue' === event && this.puthisAsesor.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisAsesor();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisAsesor argument
     */
    private setSuppInfoputhisasesor(): void {

        const displaySetIC = 'PrimerNombre,SegundoNombre,PrimerApellido';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisAsesor.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Asesor.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisAsesor.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisAsesor.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Asesor.name,
                            value.oid, displaySetIC, [Field.dtString, Field.dtString, Field.dtString]);
                    }
                }
                this.puthisAsesor.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisAsesor argument
     */
    private executeDependecyRules1puthisAsesor(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisAsesor,
                'moddbasicospersona,modificadirector,email,usuarioldap,esintegral,vercontratonovedad,verdbasicospersona' +
                ',verdocidentificacionpersona,accesovalidadorusuarios');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisAsesorActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisAsesor argument
     */
    private executeDependecyRules1puthisAsesorActions(): void {
        const varputhisasesor = this.getFirstInstanceFromCache(this.puthisAsesor);
        // v <> NULL
        if (varputhisasesor && !this.util.isNull(varputhisasesor)) {
            // pt_p_ModDBasicosPersona.SetValue( v.moddbasicospersona )
            this.ptupuModDBasicosPersona.setValue(this.util.getBool(varputhisasesor.get('moddbasicospersona')));
            // pModificaDirector.SetValue( v.modificadirector )
            this.pModificaDirector.setValue(this.util.getBool(varputhisasesor.get('modificadirector')));
            // ptEmail.SetValue( v.email )
            this.ptEmail.setValue(varputhisasesor.get('email'));
            // ptUsuarioLDAP.SetValue( v.usuarioldap )
            this.ptUsuarioLDAP.setValue(varputhisasesor.get('usuarioldap'));
            // peIntegral.SetValue( v.esintegral )
            this.peIntegral.setValue(this.util.getBool(varputhisasesor.get('esintegral')));
            // pt_pVerContratoNovedad.SetValue( v.VerContratoNovedad )
            this.ptupVerContratoNovedad.setValue(this.util.getBool(varputhisasesor.get('vercontratonovedad')));
            // pt_pVerDBasicosPersona.SetValue( v.VerDBasicosPersona )
            this.ptupVerDBasicosPersona.setValue(this.util.getBool(varputhisasesor.get('verdbasicospersona')));
            // pt_pVerDocsPersona.SetValue( v.VerDocIdentificacionPersona )
            this.ptupVerDocsPersona.setValue(this.util.getBool(varputhisasesor.get('verdocidentificacionpersona')));
            // ptValidadorUsuarios.SetValue( v.AccesoValidadorUsuarios )
            this.ptValidadorUsuarios.setValue(this.util.getBool(varputhisasesor.get('accesovalidadorusuarios')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the p_thisAsesor lense search argument
     */
    public onputhisasesorChange(): void {

        const searchText = this.puthisAsesor.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.puthisAsesor.lastText) {
                this.puthisAsesor.removeCSSClass('noResultsLenseSearch');
                this.puthisAsesor.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Asesor.name, 'IC_Asesor', searchText, [], null).then(
                        (response: any) => {
                            this.puthisAsesor.removeCSSClass('noResultsLenseSearch');
                            this.puthisAsesor.searchResults = response.results;
                            if (this.puthisAsesor.searchResults &&
                                this.puthisAsesor.searchResults.length === 0) {
                                this.puthisAsesor.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.puthisAsesor.searchResults &&
                                this.puthisAsesor.searchResults.length === 1) {
                                this.processputhisasesorSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.puthisAsesor.removeCSSClass('noResultsLenseSearch');
                            this.puthisAsesor.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.puthisAsesor.removeCSSClass('noResultsLenseSearch');
            this.puthisAsesor.searchResults = [];
            this.cleanputhisasesor();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisAsesor lense search argument
     */
    public processputhisasesorSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisAsesor.searchResults.length > index) {
            selectedInstance = this.puthisAsesor.searchResults[index];
        }
        // Clean the result list
        this.puthisAsesor.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisAsesor.allowMultiSelect) {
                this.puthisAsesor.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisAsesor.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesputhisasesor('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisAsesor lense search argument
     */
    public cleanputhisasesor(): void {
        this.clearValidationMessages();
        this.puthisAsesor.clean();
        this.executeDependecyRulesputhisasesor('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisAsesor'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisAsesor.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Asesor_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
