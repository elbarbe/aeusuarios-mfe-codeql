import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field } from '../common/baseIUElements';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

/**
 * « Implements IIU IIU_AfiliacionesMPlanes of Afiliaciones »
 */
export class AfiliacionesIIUuAfiliacionesMPlanesComponent extends AbstractIIU {

    /** Display Set elements */
    public dseUsuarioLDAP: Field;
    public dsePrimerNombre: Field;
    public dseSegundoNombre: Field;
    public dsePrimerApellido: Field;
    public dseSegundoApellido: Field;

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
        this.idXML = 'Clas_1434549485568784UIInst_1';
        this.className = ModelConstants.Afiliaciones.name;
        this.classAlias = this.langMng.translateText('cls_Afiliaciones',
            'Afiliaciones');
        this.supplementaryInfoAtt.push('usuarioldap');
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Afiliaciones_iiu_IIU_AfiliacionesMPlanes',
            'Afiliación');
        this.queryURL = '/api/AfiliacionesApi/GetPopulationDynamic';

        this.dseUsuarioLDAP = new Field(this.langMng);
        this.dsePrimerNombre = new Field(this.langMng);
        this.dseSegundoNombre = new Field(this.langMng);
        this.dsePrimerApellido = new Field(this.langMng);
        this.dseSegundoApellido = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseUsuarioLDAP.nameInRequest = 'usuarioldap';
        this.dseUsuarioLDAP.alias = this.langMng.translateText(
            'cls_Afiliaciones_ds_DS_AfiliacionesMPlanes_item_Clas_1434549485568784CjtoVis_3ICtjoVis_6',
            'Usuario');
        this.dseUsuarioLDAP.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568784CjtoVis_3ICtjoVis_6', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dseUsuarioLDAP.enabled = false;
        this.dseUsuarioLDAP.mandatory = false;
        this.dseUsuarioLDAP.dataType = Field.dtString;
        this.dseUsuarioLDAP.maxLength = 50;
        this.dseUsuarioLDAP.assignCSS();
        this.fields.push(this.dseUsuarioLDAP);

        this.dsePrimerNombre.nameInRequest = 'primernombre';
        this.dsePrimerNombre.alias = this.langMng.translateText(
            'cls_Afiliaciones_ds_DS_AfiliacionesMPlanes_item_Clas_1434549485568784CjtoVis_3ICtjoVis_1',
            'Primer nombre');
        this.dsePrimerNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568784CjtoVis_3ICtjoVis_1', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dsePrimerNombre.enabled = false;
        this.dsePrimerNombre.mandatory = false;
        this.dsePrimerNombre.dataType = Field.dtString;
        this.dsePrimerNombre.maxLength = 50;
        this.dsePrimerNombre.assignCSS();
        this.fields.push(this.dsePrimerNombre);

        this.dseSegundoNombre.nameInRequest = 'segundonombre';
        this.dseSegundoNombre.alias = this.langMng.translateText(
            'cls_Afiliaciones_ds_DS_AfiliacionesMPlanes_item_Clas_1434549485568784CjtoVis_3ICtjoVis_2',
            'Segundo nombre');
        this.dseSegundoNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568784CjtoVis_3ICtjoVis_2', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dseSegundoNombre.enabled = false;
        this.dseSegundoNombre.mandatory = false;
        this.dseSegundoNombre.dataType = Field.dtString;
        this.dseSegundoNombre.maxLength = 50;
        this.dseSegundoNombre.assignCSS();
        this.fields.push(this.dseSegundoNombre);

        this.dsePrimerApellido.nameInRequest = 'primerapellido';
        this.dsePrimerApellido.alias = this.langMng.translateText(
            'cls_Afiliaciones_ds_DS_AfiliacionesMPlanes_item_Clas_1434549485568784CjtoVis_3ICtjoVis_3',
            'Primer apellido');
        this.dsePrimerApellido.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568784CjtoVis_3ICtjoVis_3', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dsePrimerApellido.enabled = false;
        this.dsePrimerApellido.mandatory = false;
        this.dsePrimerApellido.dataType = Field.dtString;
        this.dsePrimerApellido.maxLength = 50;
        this.dsePrimerApellido.assignCSS();
        this.fields.push(this.dsePrimerApellido);

        this.dseSegundoApellido.nameInRequest = 'segundoapellido';
        this.dseSegundoApellido.alias = this.langMng.translateText(
            'cls_Afiliaciones_ds_DS_AfiliacionesMPlanes_item_Clas_1434549485568784CjtoVis_3ICtjoVis_4',
            'Segundo apellido');
        this.dseSegundoApellido.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1434549485568784CjtoVis_3ICtjoVis_4', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dseSegundoApellido.enabled = false;
        this.dseSegundoApellido.mandatory = false;
        this.dseSegundoApellido.dataType = Field.dtString;
        this.dseSegundoApellido.maxLength = 50;
        this.dseSegundoApellido.assignCSS();
        this.fields.push(this.dseSegundoApellido);

    }
}
