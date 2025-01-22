import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field } from '../common/baseIUElements';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

export class AsesorIIUuAsesorProductosComponent extends AbstractIIU {

    /** Display Set elements */
    public dseUsuario: Field;
    public dsedrvNombreCompleto: Field;

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
        this.idXML = 'Clas_1431886233600794UIInst_2';
        this.className = ModelConstants.Asesor.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin']));
        this.title = this.langMng.translateText('cls_Asesor_iiu_IIU_AsesorProductos',
            'Asesor');
        this.queryURL = '/api/AsesorApi/GetPopulationDynamic';

        this.dseUsuario = new Field(this.langMng);
        this.dsedrvNombreCompleto = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseUsuario.nameInRequest = 'usuario';
        this.dseUsuario.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_AsesorPIUMaestroProductos_item_Clas_1431886233600794CjtoVis_5ICtjoVis_1',
            'Asesor');
        this.dseUsuario.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431886233600794CjtoVis_5ICtjoVis_1', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dseUsuario.enabled = false;
        this.dseUsuario.mandatory = false;
        this.dseUsuario.dataType = Field.dtString;
        this.dseUsuario.maxLength = 50;
        this.dseUsuario.assignCSS();
        this.fields.push(this.dseUsuario);

        this.dsedrvNombreCompleto.nameInRequest = 'drvnombrecompleto';
        this.dsedrvNombreCompleto.alias = this.langMng.translateText(
            'cls_Asesor_ds_DS_AsesorPIUMaestroProductos_item_Clas_1431886233600794CjtoVis_5ICtjoVis_2',
            'Nombre');
        this.dsedrvNombreCompleto.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1431886233600794CjtoVis_5ICtjoVis_2', ['Funcionario', 'Admin', 'SuperAdmin']);
        this.dsedrvNombreCompleto.enabled = false;
        this.dsedrvNombreCompleto.mandatory = false;
        this.dsedrvNombreCompleto.dataType = Field.dtString;
        this.dsedrvNombreCompleto.maxLength = 255;
        this.dsedrvNombreCompleto.assignCSS();
        this.fields.push(this.dsedrvNombreCompleto);

    }
}
