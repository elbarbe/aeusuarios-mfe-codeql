import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
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
 * « Implements global SIU SIU_TGNEWASESORAGENCIA »
 */
@Component({
    selector: 'imes-gs-siu-tgnewasesoragencia',
    templateUrl: './siu_tgnewasesoragencia.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuTGNEWASESORAGENCIAComponent extends AbstractServiceIU implements OnInit {

    /** Fields */
    public ptupuagrSucursal: FieldOVLenseSearch;
    public ptupuatrUsuario: Field;
    public ptupuatrPrimerNombre: Field;
    public ptupuatrSegundoNombre: Field;
    public ptupuatrPrimerApellido: Field;
    public ptupuatrSegundoApellido: Field;
    public ptupuatrUsuarioLDAP: Field;
    public ptupuatrEmail: Field;
    public ptupuagrTipoIdentificacion: FieldOVPreload;
    public ptupuatrmodificaDirector: FieldDefinedSelection;
    public ptupuatrNumIdentificacion: Field;
    public ptupuatrModDBasicosPersona: FieldDefinedSelection;

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
        this.idXML = 'IGl_1475495198720658UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuutgnewasesoragencia;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TGNEWASESORAGENCIA';
        this.title = this.langMng.translateText('gs_TGNEWASESORAGENCIA',
            'Nuevo asesor de agencia');

        // Create inbound argument components
        this.ptupuagrSucursal = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptupuatrUsuario = new Field(this.langMng);
        this.ptupuatrPrimerNombre = new Field(this.langMng);
        this.ptupuatrSegundoNombre = new Field(this.langMng);
        this.ptupuatrPrimerApellido = new Field(this.langMng);
        this.ptupuatrSegundoApellido = new Field(this.langMng);
        this.ptupuatrUsuarioLDAP = new Field(this.langMng);
        this.ptupuatrEmail = new Field(this.langMng);
        this.ptupuagrTipoIdentificacion = new FieldOVPreload(this.langMng);
        this.ptupuatrmodificaDirector = new FieldDefinedSelection(this.langMng);
        this.ptupuatrNumIdentificacion = new Field(this.langMng);
        this.ptupuatrModDBasicosPersona = new FieldDefinedSelection(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuagrSucursal.nameInRequest = 'pt_p_agrsucursal';
        this.ptupuagrSucursal.alias = this.langMng.translateText(
            'gs_TGNEWASESORAGENCIA_inArg_pt_p_agrSucursal',
            'Sucursal');
        this.ptupuagrSucursal.mandatory = true;
        this.ptupuagrSucursal.dataType = ModelConstants.Sucursal.name;
        this.ptupuagrSucursal.maxLength = 200;
        this.ptupuagrSucursal.assignCSS();
        this.fields.push(this.ptupuagrSucursal);

        this.ptupuatrUsuario.nameInRequest = 'pt_p_atrusuario';
        this.ptupuatrUsuario.alias = this.langMng.translateText(
            'gs_TGNEWASESORAGENCIA_inArg_pt_p_atrUsuario',
            'Usuario');
        this.ptupuatrUsuario.mandatory = true;
        this.ptupuatrUsuario.dataType = Field.dtString;
        this.ptupuatrUsuario.maxLength = 50;
        this.ptupuatrUsuario.assignCSS();
        this.fields.push(this.ptupuatrUsuario);

        this.ptupuatrPrimerNombre.nameInRequest = 'pt_p_atrprimernombre';
        this.ptupuatrPrimerNombre.alias = this.langMng.translateText(
            'gs_TGNEWASESORAGENCIA_inArg_pt_p_atrPrimerNombre',
            'Primer nombre');
        this.ptupuatrPrimerNombre.mandatory = true;
        this.ptupuatrPrimerNombre.dataType = Field.dtString;
        this.ptupuatrPrimerNombre.maxLength = 50;
        this.ptupuatrPrimerNombre.assignCSS();
        this.fields.push(this.ptupuatrPrimerNombre);

        this.ptupuatrSegundoNombre.nameInRequest = 'pt_p_atrsegundonombre';
        this.ptupuatrSegundoNombre.alias = this.langMng.translateText(
            'gs_TGNEWASESORAGENCIA_inArg_pt_p_atrSegundoNombre',
            'Segundo nombre');
        this.ptupuatrSegundoNombre.mandatory = false;
        this.ptupuatrSegundoNombre.dataType = Field.dtString;
        this.ptupuatrSegundoNombre.maxLength = 50;
        this.ptupuatrSegundoNombre.assignCSS();
        this.fields.push(this.ptupuatrSegundoNombre);

        this.ptupuatrPrimerApellido.nameInRequest = 'pt_p_atrprimerapellido';
        this.ptupuatrPrimerApellido.alias = this.langMng.translateText(
            'gs_TGNEWASESORAGENCIA_inArg_pt_p_atrPrimerApellido',
            'Primer apellido');
        this.ptupuatrPrimerApellido.mandatory = false;
        this.ptupuatrPrimerApellido.dataType = Field.dtString;
        this.ptupuatrPrimerApellido.maxLength = 50;
        this.ptupuatrPrimerApellido.assignCSS();
        this.fields.push(this.ptupuatrPrimerApellido);

        this.ptupuatrSegundoApellido.nameInRequest = 'pt_p_atrsegundoapellido';
        this.ptupuatrSegundoApellido.alias = this.langMng.translateText(
            'gs_TGNEWASESORAGENCIA_inArg_pt_p_atrSegundoApellido',
            'Segundo apellido');
        this.ptupuatrSegundoApellido.mandatory = false;
        this.ptupuatrSegundoApellido.dataType = Field.dtString;
        this.ptupuatrSegundoApellido.maxLength = 50;
        this.ptupuatrSegundoApellido.assignCSS();
        this.fields.push(this.ptupuatrSegundoApellido);

        this.ptupuatrUsuarioLDAP.nameInRequest = 'pt_p_atrusuarioldap';
        this.ptupuatrUsuarioLDAP.alias = this.langMng.translateText(
            'gs_TGNEWASESORAGENCIA_inArg_pt_p_atrUsuarioLDAP',
            'Usuario LDAP');
        this.ptupuatrUsuarioLDAP.mandatory = false;
        this.ptupuatrUsuarioLDAP.dataType = Field.dtString;
        this.ptupuatrUsuarioLDAP.maxLength = 50;
        this.ptupuatrUsuarioLDAP.assignCSS();
        this.fields.push(this.ptupuatrUsuarioLDAP);

        this.ptupuatrEmail.nameInRequest = 'pt_p_atremail';
        this.ptupuatrEmail.alias = this.langMng.translateText(
            'gs_TGNEWASESORAGENCIA_inArg_pt_p_atrEmail',
            'Email');
        this.ptupuatrEmail.mandatory = false;
        this.ptupuatrEmail.dataType = Field.dtString;
        this.ptupuatrEmail.maxLength = 100;
        this.ptupuatrEmail.assignCSS();
        this.fields.push(this.ptupuatrEmail);

        this.ptupuagrTipoIdentificacion.nameInRequest = 'pt_p_agrtipoidentificacion';
        this.ptupuagrTipoIdentificacion.alias = this.langMng.translateText(
            'gs_TGNEWASESORAGENCIA_inArg_pt_p_agrTipoIdentificacion',
            'Tipo Identificación');
        this.ptupuagrTipoIdentificacion.mandatory = false;
        this.ptupuagrTipoIdentificacion.dataType = ModelConstants.Tipoidentificacion.name;
        this.ptupuagrTipoIdentificacion.maxLength = 170;
        this.ptupuagrTipoIdentificacion.assignCSS();
        this.fields.push(this.ptupuagrTipoIdentificacion);

        this.ptupuatrmodificaDirector.nameInRequest = 'pt_p_atrmodificadirector';
        this.ptupuatrmodificaDirector.alias = this.langMng.translateText(
            'gs_TGNEWASESORAGENCIA_inArg_pt_p_atrmodificaDirector',
            'Modifica director?');
        this.ptupuatrmodificaDirector.mandatory = true;
        this.ptupuatrmodificaDirector.dataType = Field.dtBool;
        this.ptupuatrmodificaDirector.options = DefinedSelections.DS_SINO;
        this.ptupuatrmodificaDirector.value = false;
        this.ptupuatrmodificaDirector.assignCSS();
        this.fields.push(this.ptupuatrmodificaDirector);

        this.ptupuatrNumIdentificacion.nameInRequest = 'pt_p_atrnumidentificacion';
        this.ptupuatrNumIdentificacion.alias = this.langMng.translateText(
            'gs_TGNEWASESORAGENCIA_inArg_pt_p_atrNumIdentificacion',
            'Nº Identificación');
        this.ptupuatrNumIdentificacion.mandatory = false;
        this.ptupuatrNumIdentificacion.dataType = Field.dtString;
        this.ptupuatrNumIdentificacion.maxLength = 60;
        this.ptupuatrNumIdentificacion.assignCSS();
        this.fields.push(this.ptupuatrNumIdentificacion);

        this.ptupuatrModDBasicosPersona.nameInRequest = 'pt_p_atrmoddbasicospersona';
        this.ptupuatrModDBasicosPersona.alias = this.langMng.translateText(
            'gs_TGNEWASESORAGENCIA_inArg_pt_p_atrModDBasicosPersona',
            'Modifica persona');
        this.ptupuatrModDBasicosPersona.mandatory = true;
        this.ptupuatrModDBasicosPersona.dataType = Field.dtBool;
        this.ptupuatrModDBasicosPersona.options = DefinedSelections.DS_SINO;
        this.ptupuatrModDBasicosPersona.value = false;
        this.ptupuatrModDBasicosPersona.assignCSS();
        this.fields.push(this.ptupuatrModDBasicosPersona);
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuagrTipoIdentificacion
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoIdentificacion', 'IC_TipoIdentificacion', [], null, 'OC_TipoIdentificacion').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrTipoIdentificacion.loadPreload(response.results);
                } else {
                    this.ptupuagrTipoIdentificacion.loadPreload([]);
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
    }

    /**
     * Returns true if all elements contained in the group are visible
     * @param groupId Group id.
     */
    public isGroupVisible(groupId: string): boolean {
        let isVisible;

        if (groupId === '1') {
            isVisible = this.ptupuatrUsuario.visible ||
                this.ptupuagrTipoIdentificacion.visible ||
                this.ptupuatrNumIdentificacion.visible ||
                this.ptupuatrPrimerNombre.visible ||
                this.ptupuatrSegundoNombre.visible ||
                this.ptupuatrPrimerApellido.visible ||
                this.ptupuatrSegundoApellido.visible ||
                this.ptupuatrEmail.visible ||
                this.ptupuatrUsuarioLDAP.visible;
        }
        if (groupId === '2') {
            isVisible = this.ptupuatrModDBasicosPersona.visible ||
                this.ptupuatrmodificaDirector.visible;
        }
        return isVisible;
    }

    /**
     * Returns the alias group
     * @param groupId Group id
     */
    public getGroupAlias(groupId: string): string {
        let alias = '';

        if (groupId === '1') {
            alias = this.langMng.translateText('1',
                'Datos básicos');
        }
        if (groupId === '2') {
            alias = this.langMng.translateText('2',
                'Datos control');
        }
        return alias;
    }
}
