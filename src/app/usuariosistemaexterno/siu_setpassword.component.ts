import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldPassword, FieldOVLense } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-usuariosistemaexterno-siu-setpassword',
    templateUrl: './siu_setpassword.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioSistemaExternoSIUusetPasswordComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisUsuarioSistemaExterno: FieldOVLense;
    public puNewPassword: FieldPassword;

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
        this.idXML = 'Clas_1738059022336227Ser_4UIServ_1';
        this.className = ModelConstants.Usuariosistemaexterno.name;
        this.iuName = ModelConstants.Usuariosistemaexterno.siuusetabcdefgh;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'setPassword';
        this.title = this.langMng.translateText('cls_UsuarioSistemaExterno_svc_setPassword',
            'Set password');

        // Create inbound argument components
        this.puthisUsuarioSistemaExterno = new FieldOVLense(this.langMng);
        this.puNewPassword = new FieldPassword(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisUsuarioSistemaExterno.nameInRequest = 'p_thisusuariosistemaexterno';
        this.puthisUsuarioSistemaExterno.alias = this.langMng.translateText(
            'cls_UsuarioSistemaExterno_svc_setPassword_inArg_p_thisUsuarioSistemaExterno',
            'Sistema Externo');
        this.puthisUsuarioSistemaExterno.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisUsuarioSistemaExterno.mandatory = true;
        this.puthisUsuarioSistemaExterno.dataType = ModelConstants.Usuariosistemaexterno.name;
        this.puthisUsuarioSistemaExterno.oidFields = Array(1);
        this.puthisUsuarioSistemaExterno.oidFieldsTypes = ['string'];
        this.puthisUsuarioSistemaExterno.assignCSS();
        this.fields.push(this.puthisUsuarioSistemaExterno);

        this.puNewPassword.nameInRequest = 'p_newpassword';
        this.puNewPassword.alias = this.langMng.translateText(
            'cls_UsuarioSistemaExterno_svc_setPassword_inArg_p_NewPassword',
            'Nueva password');
        this.puNewPassword.aliasConfirmationValue = 'Password confirmation';
        this.puNewPassword.mandatory = true;
        this.puNewPassword.dataType = Field.dtPass;
        this.puNewPassword.maxLength = 1;
        this.puNewPassword.assignCSS();
        this.fields.push(this.puNewPassword);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['UsuarioSistemaExterno'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisUsuarioSistemaExterno.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisUsuarioSistemaExterno();
            this.executeDependecyRulesputhisusuariosistemaexterno('SetValue', true);
            this.puthisUsuarioSistemaExterno.enabled = false;
            this.executeDependecyRulesputhisusuariosistemaexterno('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisUsuarioSistemaExterno'.toLowerCase()) {
            this.puthisUsuarioSistemaExterno.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisUsuarioSistemaExterno();
            this.executeDependecyRulesputhisusuariosistemaexterno('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisUsuarioSistemaExterno argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisusuariosistemaexterno(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisusuariosistemaexterno();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisUsuarioSistemaExterno argument
     */
    private setSuppInfoputhisusuariosistemaexterno(): void {

        const displaySetIC = 'Login';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisUsuarioSistemaExterno.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Usuariosistemaexterno.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisUsuarioSistemaExterno();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisUsuarioSistemaExterno.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Usuariosistemaexterno.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.setOidFieldsValueputhisUsuarioSistemaExterno();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisUsuarioSistemaExterno lense argument
    */
    private setOidFieldsValueputhisUsuarioSistemaExterno(): void {
        if (this.puthisUsuarioSistemaExterno.getSelectedInstances().length > 0) {
            if (this.puthisUsuarioSistemaExterno.getSelectedInstances().length > 1) {
                this.puthisUsuarioSistemaExterno.oidFields = [null];
                this.puthisUsuarioSistemaExterno.editorsEnabled = false;
                this.puthisUsuarioSistemaExterno.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisUsuarioSistemaExterno.getSelectedInstances().length.toString());
            } else {
                this.puthisUsuarioSistemaExterno.editorsEnabled = true;
                this.puthisUsuarioSistemaExterno.oidFields[0] =
                    this.puthisUsuarioSistemaExterno.getSelectedInstances()[0].oid.login;
                this.puthisUsuarioSistemaExterno.supplementaryInfo =
                    this.puthisUsuarioSistemaExterno.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisUsuarioSistemaExterno.oidFields = Array(1);
            this.puthisUsuarioSistemaExterno.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisUsuarioSistemaExterno lense argument
     */
    public onputhisusuariosistemaexternoChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisUsuarioSistemaExterno.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisUsuarioSistemaExterno.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            login: this.puthisUsuarioSistemaExterno.oidFields[0]
            };
            this.puthisUsuarioSistemaExterno.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Usuariosistemaexterno.name, oid,
                'Login');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisUsuarioSistemaExterno.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Usuariosistemaexterno.name, value.oid)) {
                        this.puthisUsuarioSistemaExterno.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisUsuarioSistemaExterno.alias));
                        this.puthisUsuarioSistemaExterno.cleanSelectedInstances();
                        this.puthisUsuarioSistemaExterno.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhisusuariosistemaexterno('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisUsuarioSistemaExterno argument value
     */
    public cleanputhisusuariosistemaexterno(): void {
        this.clearValidationMessages();
        this.puthisUsuarioSistemaExterno.clean();
        this.puthisUsuarioSistemaExterno.oidFields = Array(1);
        this.executeDependecyRulesputhisusuariosistemaexterno('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisUsuarioSistemaExterno'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisUsuarioSistemaExterno.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_UsuarioSistemaExterno';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
