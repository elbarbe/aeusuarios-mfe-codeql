import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Asesor'
 */
export class AsesorServices extends AbstractServices {

    private tMODIFICARASESORSrvName = 'TMODIFICARASESOR';
    private tDELETESrvName = 'TDELETE';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Asesor');
    }

    /**
     * Call to the filter 'F_Asesores' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vUsuarioVar Variable vUsuario
     * @param vPrimerNombreVar Variable vPrimerNombre
     * @param vSegundoNombreVar Variable vSegundoNombre
     * @param vPrimerApellidoVar Variable vPrimerApellido
     * @param vSegundoApellidoVar Variable vSegundoApellido
     */
    public queryByFilterFuAsesores(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vUsuarioVar: string | null, vPrimerNombreVar: string | null, vSegundoNombreVar: string | null,
        vPrimerApellidoVar: string | null, vSegundoApellidoVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_Asesores');
        this.util.addFilterVariable(filter, 'vusuario', vUsuarioVar);
        this.util.addFilterVariable(filter, 'vprimernombre', vPrimerNombreVar);
        this.util.addFilterVariable(filter, 'vsegundonombre', vSegundoNombreVar);
        this.util.addFilterVariable(filter, 'vprimerapellido', vPrimerApellidoVar);
        this.util.addFilterVariable(filter, 'vsegundoapellido', vSegundoApellidoVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * Call to the filter 'F_Directores' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vUsuarioVar Variable vUsuario
     * @param vPrimerNombreVar Variable vPrimerNombre
     * @param vSegundoNombreVar Variable vSegundoNombre
     * @param vPrimerApellidoVar Variable vPrimerApellido
     * @param vSegundoApellidoVar Variable vSegundoApellido
     */
    public queryByFilterFuDirectores(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vUsuarioVar: string | null, vPrimerNombreVar: string | null, vSegundoNombreVar: string | null,
        vPrimerApellidoVar: string | null, vSegundoApellidoVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_Directores');
        this.util.addFilterVariable(filter, 'vusuario', vUsuarioVar);
        this.util.addFilterVariable(filter, 'vprimernombre', vPrimerNombreVar);
        this.util.addFilterVariable(filter, 'vsegundonombre', vSegundoNombreVar);
        this.util.addFilterVariable(filter, 'vprimerapellido', vPrimerApellidoVar);
        this.util.addFilterVariable(filter, 'vsegundoapellido', vSegundoApellidoVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * Call to the filter 'F_AsesoresAgencia' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vUsuarioVar Variable vUsuario
     * @param vPrimerNombreVar Variable vPrimerNombre
     * @param vSegundoNombreVar Variable vSegundoNombre
     * @param vPrimerApellidoVar Variable vPrimerApellido
     * @param vSegundoApellidoVar Variable vSegundoApellido
     */
    public queryByFilterFuAsesoresAgencia(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vUsuarioVar: string | null, vPrimerNombreVar: string | null, vSegundoNombreVar: string | null,
        vPrimerApellidoVar: string | null, vSegundoApellidoVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_AsesoresAgencia');
        this.util.addFilterVariable(filter, 'vusuario', vUsuarioVar);
        this.util.addFilterVariable(filter, 'vprimernombre', vPrimerNombreVar);
        this.util.addFilterVariable(filter, 'vsegundonombre', vSegundoNombreVar);
        this.util.addFilterVariable(filter, 'vprimerapellido', vPrimerApellidoVar);
        this.util.addFilterVariable(filter, 'vsegundoapellido', vSegundoApellidoVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidAgentexProducto Oid of related 'AgentexProducto' instance using the role 'AgentexProducto'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedAgentexProducto(
        oidAgentexProducto: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidAgentexProducto, 'AgentexProducto');
    }

    /**
     * @param oidLogInformacionAsesor Oid of related 'LogInformacionAsesor' instance using the role 'LogInformacionAsesor'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLogInformacionAsesor(
        oidLogInformacionAsesor: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLogInformacionAsesor, 'LogInformacionAsesor');
    }

    /**
     * @param oidLogHistoricoPlanes Oid of related 'LogHistoricoPlanes' instance using the role 'LogHistoricoPlanes'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLogHistoricoPlanes(
        oidLogHistoricoPlanes: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLogHistoricoPlanes, 'LogHistoricoPlanes');
    }

    /**
     * Call to the service 'TMODIFICARASESOR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisAsesorInArg Mandatory argument 'p_thisAsesor'. Oid of 'Asesor' class
     * @param ptupuModDBasicosPersonaInArg Mandatory argument 'pt_p_ModDBasicosPersona'
     * @param pModificaDirectorInArg Mandatory argument 'pModificaDirector'
     * @param ptUsuarioLDAPInArg Optional argument 'ptUsuarioLDAP'
     * @param ptEmailInArg Optional argument 'ptEmail'
     * @param peIntegralInArg Mandatory argument 'peIntegral'
     * @param ptupVerDBasicosPersonaInArg Mandatory argument 'pt_pVerDBasicosPersona'
     * @param ptupVerDocsPersonaInArg Mandatory argument 'pt_pVerDocsPersona'
     * @param ptupVerContratoNovedadInArg Mandatory argument 'pt_pVerContratoNovedad'
     * @param ptValidadorUsuariosInArg Mandatory argument 'ptValidadorUsuarios'
     */
    public tMODIFICARASESOR(
        puthisAsesorInArg: any, ptupuModDBasicosPersonaInArg: boolean, pModificaDirectorInArg: boolean,
        ptUsuarioLDAPInArg: string | null, ptEmailInArg: string | null, peIntegralInArg: boolean,
        ptupVerDBasicosPersonaInArg: boolean, ptupVerDocsPersonaInArg: boolean, ptupVerContratoNovedadInArg: boolean,
        ptValidadorUsuariosInArg: boolean): Promise<void> {
        const request: {
            p_thisasesor_oid: any, pt_p_moddbasicospersona: boolean, pmodificadirector: boolean, ptusuarioldap: string | null,
            ptemail: string | null, peintegral: boolean, pt_pverdbasicospersona: boolean, pt_pverdocspersona: boolean,
            pt_pvercontratonovedad: boolean, ptvalidadorusuarios: boolean
        } = {
            p_thisasesor_oid: puthisAsesorInArg, pt_p_moddbasicospersona: ptupuModDBasicosPersonaInArg,
            pmodificadirector: pModificaDirectorInArg, ptusuarioldap: ptUsuarioLDAPInArg, ptemail: ptEmailInArg,
            peintegral: peIntegralInArg, pt_pverdbasicospersona: ptupVerDBasicosPersonaInArg,
            pt_pverdocspersona: ptupVerDocsPersonaInArg, pt_pvercontratonovedad: ptupVerContratoNovedadInArg,
            ptvalidadorusuarios: ptValidadorUsuariosInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tMODIFICARASESORSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TDELETE' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisAsesorInArg Mandatory argument 'p_thisAsesor'. Oid of 'Asesor' class
     */
    public tDELETE(
        puthisAsesorInArg: any): Promise<void> {
        const request: {
            p_thisasesor_oid: any
        } = {
            p_thisasesor_oid: puthisAsesorInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tDELETESrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
