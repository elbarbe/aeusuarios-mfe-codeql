import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldPassword } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
@Component({
    selector: 'imes-usuariosistemaexterno-siu-crear',
    templateUrl: './siu_crear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioSistemaExternoSIUucrearComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puatrLogin: Field;
    public puatrDescripcion: Field;
    public pupassword: FieldPassword;

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
        this.idXML = 'Clas_1738059022336227Ser_1UIServ_1';
        this.className = ModelConstants.Usuariosistemaexterno.name;
        this.iuName = ModelConstants.Usuariosistemaexterno.siuucrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'crear';
        this.title = this.langMng.translateText('cls_UsuarioSistemaExterno_svc_crear',
            'Crear');

        // Create inbound argument components
        this.puatrLogin = new Field(this.langMng);
        this.puatrDescripcion = new Field(this.langMng);
        this.pupassword = new FieldPassword(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puatrLogin.nameInRequest = 'p_atrlogin';
        this.puatrLogin.alias = this.langMng.translateText(
            'cls_UsuarioSistemaExterno_svc_crear_inArg_p_atrLogin',
            'Login');
        this.puatrLogin.mandatory = true;
        this.puatrLogin.dataType = Field.dtString;
        this.puatrLogin.maxLength = 20;
        this.puatrLogin.assignCSS();
        this.fields.push(this.puatrLogin);

        this.puatrDescripcion.nameInRequest = 'p_atrdescripcion';
        this.puatrDescripcion.alias = this.langMng.translateText(
            'cls_UsuarioSistemaExterno_svc_crear_inArg_p_atrDescripcion',
            'Descripción');
        this.puatrDescripcion.mandatory = false;
        this.puatrDescripcion.dataType = Field.dtString;
        this.puatrDescripcion.maxLength = 255;
        this.puatrDescripcion.assignCSS();
        this.fields.push(this.puatrDescripcion);

        this.pupassword.nameInRequest = 'p_password';
        this.pupassword.alias = this.langMng.translateText(
            'cls_UsuarioSistemaExterno_svc_crear_inArg_p_password',
            'Password');
        this.pupassword.aliasConfirmationValue = 'Password confirmation';
        this.pupassword.mandatory = true;
        this.pupassword.dataType = Field.dtPass;
        this.pupassword.maxLength = 1;
        this.pupassword.assignCSS();
        this.fields.push(this.pupassword);
    }
}
