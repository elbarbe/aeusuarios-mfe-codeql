import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { Field } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';

/**
 * « Manages the filter F_Gestor of class Gestor »
 */
export class GestorFilterFuGestor extends AbstractFilter {

    /** Filter variables */
    public vfPrimerNombre: Field;
    public vfSegundoNombre: Field;
    public vfPrimerApe: Field;
    public vfSegundoApe: Field;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     */
    constructor(public override appGlobalInfo: AppGlobalInfo,
                public override util: Util,
                public override changeDetectorRef: ChangeDetectorRef,
                public langMng: LanguageMng,
                public stdFun: StandardFunctions) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.title = this.langMng.translateText('cls_Gestor_filter_F_Gestor',
            'Por Nombre');
        this.filterName = 'F_Gestor';

        this.vfPrimerNombre = new Field(this.langMng);
        this.vfSegundoNombre = new Field(this.langMng);
        this.vfPrimerApe = new Field(this.langMng);
        this.vfSegundoApe = new Field(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vfPrimerNombre.nameInRequest = 'vfprimernombre';
        this.vfPrimerNombre.alias = this.langMng.translateText(
            'cls_Gestor_filter_F_Gestor_fvar_vfPrimerNombre',
            'Primer Nombre');
        this.vfPrimerNombre.visible = true;
        this.vfPrimerNombre.enabled = true;
        this.vfPrimerNombre.mandatory = false;
        this.vfPrimerNombre.dataType = Field.dtString;
        this.vfPrimerNombre.maxLength = 20;
        this.vfPrimerNombre.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfPrimerNombre);

        this.vfSegundoNombre.nameInRequest = 'vfsegundonombre';
        this.vfSegundoNombre.alias = this.langMng.translateText(
            'cls_Gestor_filter_F_Gestor_fvar_vfSegundoNombre',
            'Segundo Nombre');
        this.vfSegundoNombre.visible = true;
        this.vfSegundoNombre.enabled = true;
        this.vfSegundoNombre.mandatory = false;
        this.vfSegundoNombre.dataType = Field.dtString;
        this.vfSegundoNombre.maxLength = 20;
        this.vfSegundoNombre.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfSegundoNombre);

        this.vfPrimerApe.nameInRequest = 'vfprimerape';
        this.vfPrimerApe.alias = this.langMng.translateText(
            'cls_Gestor_filter_F_Gestor_fvar_vfPrimerApe',
            'Primer Apellido');
        this.vfPrimerApe.visible = true;
        this.vfPrimerApe.enabled = true;
        this.vfPrimerApe.mandatory = false;
        this.vfPrimerApe.dataType = Field.dtString;
        this.vfPrimerApe.maxLength = 20;
        this.vfPrimerApe.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfPrimerApe);

        this.vfSegundoApe.nameInRequest = 'vfsegundoape';
        this.vfSegundoApe.alias = this.langMng.translateText(
            'cls_Gestor_filter_F_Gestor_fvar_vfSegundoApe',
            'Segundo Apellido');
        this.vfSegundoApe.visible = true;
        this.vfSegundoApe.enabled = true;
        this.vfSegundoApe.mandatory = false;
        this.vfSegundoApe.dataType = Field.dtString;
        this.vfSegundoApe.maxLength = 20;
        this.vfSegundoApe.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfSegundoApe);
    }
}
