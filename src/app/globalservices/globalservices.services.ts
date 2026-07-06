import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * « Global services »
 */
export class GlobalServicesServices extends AbstractServices {

    private oGSINCASESORESSrvName = 'OGSINCASESORES';
    private tCREARAGENTESrvName = 'TCREARAGENTE';
    private tMODIFICARAGENTESrvName = 'TMODIFICARAGENTE';
    private tGNEWASESORAGENCIASrvName = 'TGNEWASESORAGENCIA';
    private tGMODASESORAGENCIASrvName = 'TGMODASESORAGENCIA';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'GlobalServices');
    }

    /**
     * Call to the service 'OGSINCASESORES' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     */
    public oGSINCASESORES(
        ):
        Promise<ErrorInformation | {
            oamensaje: string
        }> {
        const request = {};
        return new Promise<ErrorInformation | {
            oamensaje: string
        }> ((resolve, reject) => {
            this.callService(this.oGSINCASESORESSrvName, request).then((response: any) => {
                resolve({
                    oamensaje: response.oamensaje
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCREARAGENTE' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuagrRolInArg Mandatory argument 'pt_p_agrRol'. Oid of 'Rol' class
     * @param ptupuatrUsuarioInArg Mandatory argument 'pt_p_atrUsuario'
     * @param ptupuatrPrimerNombreInArg Mandatory argument 'pt_p_atrPrimerNombre'
     * @param ptupuatrSegundoNombreInArg Optional argument 'pt_p_atrSegundoNombre'
     * @param ptupuatrPrimerApellidoInArg Optional argument 'pt_p_atrPrimerApellido'
     * @param ptupuatrSegundoApellidoInArg Optional argument 'pt_p_atrSegundoApellido'
     * @param ptupuagrSucursalInArg Mandatory argument 'pt_p_agrSucursal'. Oid of 'Sucursal' class
     * @param ptupuatrUsuarioLDAPInArg Optional argument 'pt_p_atrUsuarioLDAP'
     * @param ptupuatrEmailInArg Optional argument 'pt_p_atrEmail'
     * @param ptupuagrRegionalInArg Optional argument 'pt_p_agrRegional'. Oid of 'Regional' class
     */
    public tCREARAGENTE(
        ptupuagrRolInArg: any, ptupuatrUsuarioInArg: string, ptupuatrPrimerNombreInArg: string, ptupuatrSegundoNombreInArg: string,
        ptupuatrPrimerApellidoInArg: string, ptupuatrSegundoApellidoInArg: string, ptupuagrSucursalInArg: any,
        ptupuatrUsuarioLDAPInArg: string, ptupuatrEmailInArg: string, ptupuagrRegionalInArg: any): Promise<ErrorInformation | void> {
        const request: {
            pt_p_agrrol_json: any, pt_p_atrusuario: string, pt_p_atrprimernombre: string, pt_p_atrsegundonombre: string,
            pt_p_atrprimerapellido: string, pt_p_atrsegundoapellido: string, pt_p_agrsucursal_oid: any, pt_p_atrusuarioldap: string,
            pt_p_atremail: string, pt_p_agrregional_oid: any
        } = {
            pt_p_agrrol_json: ptupuagrRolInArg ? JSON.stringify(ptupuagrRolInArg) : '', pt_p_atrusuario: ptupuatrUsuarioInArg,
            pt_p_atrprimernombre: ptupuatrPrimerNombreInArg, pt_p_atrsegundonombre: ptupuatrSegundoNombreInArg,
            pt_p_atrprimerapellido: ptupuatrPrimerApellidoInArg, pt_p_atrsegundoapellido: ptupuatrSegundoApellidoInArg,
            pt_p_agrsucursal_oid: ptupuagrSucursalInArg, pt_p_atrusuarioldap: ptupuatrUsuarioLDAPInArg,
            pt_p_atremail: ptupuatrEmailInArg, pt_p_agrregional_oid: ptupuagrRegionalInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tCREARAGENTESrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMODIFICARAGENTE' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptuputhisAgenteInArg Mandatory argument 'pt_p_thisAgente'. Oid of 'Funcionario' class
     * @param ptupuPrimerNombreInArg Mandatory argument 'pt_p_PrimerNombre'
     * @param ptupuSegundoNombreInArg Optional argument 'pt_p_SegundoNombre'
     * @param ptupuPrimerApellidoInArg Optional argument 'pt_p_PrimerApellido'
     * @param ptupuSegundoApellidoInArg Optional argument 'pt_p_SegundoApellido'
     * @param ptuNuevoRolInArg Mandatory argument 'pt_NuevoRol'. Oid of 'Rol' class
     * @param ptupuatrUsuarioLDAPInArg Optional argument 'pt_p_atrUsuarioLDAP'
     * @param ptupuatrEmailInArg Optional argument 'pt_p_atrEmail'
     * @param ptupuagrRegionalInArg Optional argument 'pt_p_agrRegional'. Oid of 'Regional' class
     */
    public tMODIFICARAGENTE(
        ptuputhisAgenteInArg: any, ptupuPrimerNombreInArg: string, ptupuSegundoNombreInArg: string, ptupuPrimerApellidoInArg: string,
        ptupuSegundoApellidoInArg: string, ptuNuevoRolInArg: any, ptupuatrUsuarioLDAPInArg: string, ptupuatrEmailInArg: string,
        ptupuagrRegionalInArg: any): Promise<ErrorInformation | void> {
        const request: {
            pt_p_thisagente_oid: any, pt_p_primernombre: string, pt_p_segundonombre: string, pt_p_primerapellido: string,
            pt_p_segundoapellido: string, pt_nuevorol_json: any, pt_p_atrusuarioldap: string, pt_p_atremail: string,
            pt_p_agrregional_oid: any
        } = {
            pt_p_thisagente_oid: ptuputhisAgenteInArg, pt_p_primernombre: ptupuPrimerNombreInArg,
            pt_p_segundonombre: ptupuSegundoNombreInArg, pt_p_primerapellido: ptupuPrimerApellidoInArg,
            pt_p_segundoapellido: ptupuSegundoApellidoInArg,
            pt_nuevorol_json: ptuNuevoRolInArg ? JSON.stringify(ptuNuevoRolInArg) : '', pt_p_atrusuarioldap: ptupuatrUsuarioLDAPInArg,
            pt_p_atremail: ptupuatrEmailInArg, pt_p_agrregional_oid: ptupuagrRegionalInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tMODIFICARAGENTESrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGNEWASESORAGENCIA' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuagrSucursalInArg Mandatory argument 'pt_p_agrSucursal'. Oid of 'Sucursal' class
     * @param ptupuatrUsuarioInArg Mandatory argument 'pt_p_atrUsuario'
     * @param ptupuatrPrimerNombreInArg Mandatory argument 'pt_p_atrPrimerNombre'
     * @param ptupuatrSegundoNombreInArg Optional argument 'pt_p_atrSegundoNombre'
     * @param ptupuatrPrimerApellidoInArg Optional argument 'pt_p_atrPrimerApellido'
     * @param ptupuatrSegundoApellidoInArg Optional argument 'pt_p_atrSegundoApellido'
     * @param ptupuatrUsuarioLDAPInArg Optional argument 'pt_p_atrUsuarioLDAP'
     * @param ptupuatrEmailInArg Optional argument 'pt_p_atrEmail'
     * @param ptupuagrTipoIdentificacionInArg Optional argument 'pt_p_agrTipoIdentificacion'. Oid of 'TipoIdentificacion' class
     * @param ptupuatrmodificaDirectorInArg Mandatory argument 'pt_p_atrmodificaDirector'
     * @param ptupuatrNumIdentificacionInArg Optional argument 'pt_p_atrNumIdentificacion'
     * @param ptupuatrModDBasicosPersonaInArg Mandatory argument 'pt_p_atrModDBasicosPersona'
     */
    public tGNEWASESORAGENCIA(
        ptupuagrSucursalInArg: any, ptupuatrUsuarioInArg: string, ptupuatrPrimerNombreInArg: string,
        ptupuatrSegundoNombreInArg: string, ptupuatrPrimerApellidoInArg: string, ptupuatrSegundoApellidoInArg: string,
        ptupuatrUsuarioLDAPInArg: string, ptupuatrEmailInArg: string, ptupuagrTipoIdentificacionInArg: any,
        ptupuatrmodificaDirectorInArg: boolean, ptupuatrNumIdentificacionInArg: string, ptupuatrModDBasicosPersonaInArg: boolean):
        Promise<ErrorInformation | {
            oafuncionario: any
        }> {
        const request: {
            pt_p_agrsucursal_oid: any, pt_p_atrusuario: string, pt_p_atrprimernombre: string, pt_p_atrsegundonombre: string,
            pt_p_atrprimerapellido: string, pt_p_atrsegundoapellido: string, pt_p_atrusuarioldap: string, pt_p_atremail: string,
            pt_p_agrtipoidentificacion_json: any, pt_p_atrmodificadirector: boolean, pt_p_atrnumidentificacion: string,
            pt_p_atrmoddbasicospersona: boolean
        } = {
            pt_p_agrsucursal_oid: ptupuagrSucursalInArg, pt_p_atrusuario: ptupuatrUsuarioInArg,
            pt_p_atrprimernombre: ptupuatrPrimerNombreInArg, pt_p_atrsegundonombre: ptupuatrSegundoNombreInArg,
            pt_p_atrprimerapellido: ptupuatrPrimerApellidoInArg, pt_p_atrsegundoapellido: ptupuatrSegundoApellidoInArg,
            pt_p_atrusuarioldap: ptupuatrUsuarioLDAPInArg, pt_p_atremail: ptupuatrEmailInArg,
            pt_p_agrtipoidentificacion_json: ptupuagrTipoIdentificacionInArg ? JSON.stringify(ptupuagrTipoIdentificacionInArg) : '',
            pt_p_atrmodificadirector: ptupuatrmodificaDirectorInArg, pt_p_atrnumidentificacion: ptupuatrNumIdentificacionInArg,
            pt_p_atrmoddbasicospersona: ptupuatrModDBasicosPersonaInArg
        };
        return new Promise<ErrorInformation | {
            oafuncionario: any
        }> ((resolve, reject) => {
            this.callService(this.tGNEWASESORAGENCIASrvName, request).then((response: any) => {
                resolve({
                    oafuncionario: response.oafuncionario
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TGMODASESORAGENCIA' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptuputhisAsesorInArg Mandatory argument 'pt_p_thisAsesor'. Oid of 'Asesor' class
     * @param ptupuModDBasicosPersonaInArg Mandatory argument 'pt_p_ModDBasicosPersona'
     * @param ptupModificaDirectorInArg Mandatory argument 'pt_pModificaDirector'
     * @param ptuptUsuarioLDAPInArg Optional argument 'pt_ptUsuarioLDAP'
     * @param ptuptEmailInArg Optional argument 'pt_ptEmail'
     * @param ptupuPrimerNombreInArg Mandatory argument 'pt_p_PrimerNombre'
     * @param ptupuSegundoNombreInArg Optional argument 'pt_p_SegundoNombre'
     * @param ptupuPrimerApellidoInArg Optional argument 'pt_p_PrimerApellido'
     * @param ptupuSegundoApellidoInArg Optional argument 'pt_p_SegundoApellido'
     * @param ptupeNumUsuarioInArg Mandatory argument 'pt_peNumUsuario'
     * @param ptuptSucursalInArg Mandatory argument 'pt_ptSucursal'. Oid of 'Sucursal' class
     * @param ptuptTipoIdentificacionInArg Mandatory argument 'pt_ptTipoIdentificacion'. Oid of 'TipoIdentificacion' class
     * @param ptuptNumIdentificacionInArg Mandatory argument 'pt_ptNumIdentificacion'
     * @param ptupVerDBasicosPersonaInArg Mandatory argument 'pt_pVerDBasicosPersona'
     * @param ptupVerDocsPersonaInArg Mandatory argument 'pt_pVerDocsPersona'
     * @param ptupVerContratoNovedadInArg Mandatory argument 'pt_pVerContratoNovedad'
     */
    public tGMODASESORAGENCIA(
        ptuputhisAsesorInArg: any, ptupuModDBasicosPersonaInArg: boolean, ptupModificaDirectorInArg: boolean,
        ptuptUsuarioLDAPInArg: string, ptuptEmailInArg: string, ptupuPrimerNombreInArg: string, ptupuSegundoNombreInArg: string,
        ptupuPrimerApellidoInArg: string, ptupuSegundoApellidoInArg: string, ptupeNumUsuarioInArg: string, ptuptSucursalInArg: any,
        ptuptTipoIdentificacionInArg: any, ptuptNumIdentificacionInArg: string, ptupVerDBasicosPersonaInArg: boolean,
        ptupVerDocsPersonaInArg: boolean, ptupVerContratoNovedadInArg: boolean): Promise<ErrorInformation | void> {
        const request: {
            pt_p_thisasesor_oid: any, pt_p_moddbasicospersona: boolean, pt_pmodificadirector: boolean, pt_ptusuarioldap: string,
            pt_ptemail: string, pt_p_primernombre: string, pt_p_segundonombre: string, pt_p_primerapellido: string,
            pt_p_segundoapellido: string, pt_penumusuario: string, pt_ptsucursal_oid: any, pt_pttipoidentificacion_json: any,
            pt_ptnumidentificacion: string, pt_pverdbasicospersona: boolean, pt_pverdocspersona: boolean,
            pt_pvercontratonovedad: boolean
        } = {
            pt_p_thisasesor_oid: ptuputhisAsesorInArg, pt_p_moddbasicospersona: ptupuModDBasicosPersonaInArg,
            pt_pmodificadirector: ptupModificaDirectorInArg, pt_ptusuarioldap: ptuptUsuarioLDAPInArg, pt_ptemail: ptuptEmailInArg,
            pt_p_primernombre: ptupuPrimerNombreInArg, pt_p_segundonombre: ptupuSegundoNombreInArg,
            pt_p_primerapellido: ptupuPrimerApellidoInArg, pt_p_segundoapellido: ptupuSegundoApellidoInArg,
            pt_penumusuario: ptupeNumUsuarioInArg, pt_ptsucursal_oid: ptuptSucursalInArg,
            pt_pttipoidentificacion_json: ptuptTipoIdentificacionInArg ? JSON.stringify(ptuptTipoIdentificacionInArg) : '',
            pt_ptnumidentificacion: ptuptNumIdentificacionInArg, pt_pverdbasicospersona: ptupVerDBasicosPersonaInArg,
            pt_pverdocspersona: ptupVerDocsPersonaInArg, pt_pvercontratonovedad: ptupVerContratoNovedadInArg
        };
        return new Promise<ErrorInformation | void> ((resolve, reject) => {
             this.callService(this.tGMODASESORAGENCIASrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
