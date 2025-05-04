import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { Field } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';

/**
 * Manages the filter F_AfiliacionesPorNombre of class Afiliaciones
 */
export class AfiliacionesFilterFuAfiliacionesPorNombre extends AbstractFilter {

    /** Filter variables */
    public vUsuario: Field;
    public vPrimerNombre: Field;
    public vSegundoNombre: Field;
    public vPrimerApe: Field;
    public vSegundoApe: Field;

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
        this.title = this.langMng.translateText('cls_Afiliaciones_filter_F_AfiliacionesPorNombre',
            'Por Nombre');
        this.filterName = 'F_AfiliacionesPorNombre';

        this.vUsuario = new Field(this.langMng);
        this.vPrimerNombre = new Field(this.langMng);
        this.vSegundoNombre = new Field(this.langMng);
        this.vPrimerApe = new Field(this.langMng);
        this.vSegundoApe = new Field(this.langMng);
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vUsuario.nameInRequest = 'vusuario';
        this.vUsuario.alias = this.langMng.translateText(
            'cls_Afiliaciones_filter_F_AfiliacionesPorNombre_fvar_vUsuario',
            'Usuario');
        this.vUsuario.visible = true;
        this.vUsuario.enabled = true;
        this.vUsuario.mandatory = false;
        this.vUsuario.dataType = Field.dtString;
        this.vUsuario.maxLength = 20;
        this.vUsuario.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vUsuario);

        this.vPrimerNombre.nameInRequest = 'vprimernombre';
        this.vPrimerNombre.alias = this.langMng.translateText(
            'cls_Afiliaciones_filter_F_AfiliacionesPorNombre_fvar_vPrimerNombre',
            'Primer Nombre');
        this.vPrimerNombre.visible = true;
        this.vPrimerNombre.enabled = true;
        this.vPrimerNombre.mandatory = false;
        this.vPrimerNombre.dataType = Field.dtString;
        this.vPrimerNombre.maxLength = 20;
        this.vPrimerNombre.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vPrimerNombre);

        this.vSegundoNombre.nameInRequest = 'vsegundonombre';
        this.vSegundoNombre.alias = this.langMng.translateText(
            'cls_Afiliaciones_filter_F_AfiliacionesPorNombre_fvar_vSegundoNombre',
            'Segundo Nombre');
        this.vSegundoNombre.visible = true;
        this.vSegundoNombre.enabled = true;
        this.vSegundoNombre.mandatory = false;
        this.vSegundoNombre.dataType = Field.dtString;
        this.vSegundoNombre.maxLength = 20;
        this.vSegundoNombre.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vSegundoNombre);

        this.vPrimerApe.nameInRequest = 'vprimerape';
        this.vPrimerApe.alias = this.langMng.translateText(
            'cls_Afiliaciones_filter_F_AfiliacionesPorNombre_fvar_vPrimerApe',
            'Primer Apellido');
        this.vPrimerApe.visible = true;
        this.vPrimerApe.enabled = true;
        this.vPrimerApe.mandatory = false;
        this.vPrimerApe.dataType = Field.dtString;
        this.vPrimerApe.maxLength = 20;
        this.vPrimerApe.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vPrimerApe);

        this.vSegundoApe.nameInRequest = 'vsegundoape';
        this.vSegundoApe.alias = this.langMng.translateText(
            'cls_Afiliaciones_filter_F_AfiliacionesPorNombre_fvar_vSegundoApe',
            'Segundo Apellido');
        this.vSegundoApe.visible = true;
        this.vSegundoApe.enabled = true;
        this.vSegundoApe.mandatory = false;
        this.vSegundoApe.dataType = Field.dtString;
        this.vSegundoApe.maxLength = 20;
        this.vSegundoApe.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vSegundoApe);
    }
}
