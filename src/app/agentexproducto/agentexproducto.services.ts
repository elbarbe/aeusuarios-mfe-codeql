import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'AgentexProducto'
 */
export class AgentexProductoServices extends AbstractServices {

    private eliminarSrvName = 'eliminar';
    private tCREARSrvName = 'TCREAR';
    private tADDDOMINIOSrvName = 'TADDDOMINIO';
    private tDELDOMINIOSrvName = 'TDELDOMINIO';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'AgentexProducto');
    }

    /**
     * @param oidProductoT Oid of related 'Productos' instance using the role 'ProductoT'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedProductoT(
        oidProductoT: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidProductoT, 'ProductoT');
    }

    /**
     * @param oidAsesor Oid of related 'Asesor' instance using the role 'Asesor'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedAsesor(
        oidAsesor: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidAsesor, 'Asesor');
    }

    /**
     * @param oidDominios Oid of related 'Dominio' instance using the role 'Dominios'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDominios(
        oidDominios: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDominios, 'Dominios');
    }

    /**
     * Call to the service 'eliminar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisAgentexProductoInArg Mandatory argument 'p_thisAgentexProducto'. Oid of 'AgentexProducto' class
     */
    public eliminar(
        puthisAgentexProductoInArg: any): Promise<void> {
        const request: {
            p_thisagentexproducto_oid: any
        } = {
            p_thisagentexproducto_oid: puthisAgentexProductoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.eliminarSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCREAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuagrProductoTInArg Mandatory argument 'pt_p_agrProductoT'. Oid of 'Productos' class
     * @param ptupuagrAsesorInArg Mandatory argument 'pt_p_agrAsesor'. Oid of 'Asesor' class
     * @param ptupuatrFechaInicioInArg Optional argument 'pt_p_atrFechaInicio'
     * @param ptupuatrFechaFinInArg Optional argument 'pt_p_atrFechaFin'
     * @param ptupuatrCodigoInArg Mandatory argument 'pt_p_atrCodigo'
     */
    public tCREAR(
        ptupuagrProductoTInArg: any, ptupuagrAsesorInArg: any, ptupuatrFechaInicioInArg: Date | null,
        ptupuatrFechaFinInArg: Date | null, ptupuatrCodigoInArg: number): Promise<void> {
        const request: {
            pt_p_agrproductot_oid: any, pt_p_agrasesor_oid: any, pt_p_atrfechainicio: string | null, pt_p_atrfechafin: string | null,
            pt_p_atrcodigo: number
        } = {
            pt_p_agrproductot_oid: ptupuagrProductoTInArg, pt_p_agrasesor_oid: ptupuagrAsesorInArg,
            pt_p_atrfechainicio: ptupuatrFechaInicioInArg ? JsonUtility.dateTime2Json(ptupuatrFechaInicioInArg) : '',
            pt_p_atrfechafin: ptupuatrFechaFinInArg ? JsonUtility.dateTime2Json(ptupuatrFechaFinInArg) : '',
            pt_p_atrcodigo: ptupuatrCodigoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCREARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TADDDOMINIO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisAgentexProductoInArg Mandatory argument 'p_thisAgentexProducto'. Oid of 'AgentexProducto' class
     * @param ptupuevcDominioInArg Mandatory argument 'pt_p_evcDominio'. Oid of 'Dominio' class
     */
    public tADDDOMINIO(
        puthisAgentexProductoInArg: any, ptupuevcDominioInArg: any): Promise<void> {
        const request: {
            p_thisagentexproducto_oid: any, pt_p_evcdominio_oid: any
        } = {
            p_thisagentexproducto_oid: puthisAgentexProductoInArg, pt_p_evcdominio_oid: ptupuevcDominioInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tADDDOMINIOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TDELDOMINIO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisAgentexProductoInArg Mandatory argument 'p_thisAgentexProducto'. Oid of 'AgentexProducto' class
     * @param ptupuevcDominioInArg Mandatory argument 'pt_p_evcDominio'. Oid of 'Dominio' class
     */
    public tDELDOMINIO(
        puthisAgentexProductoInArg: any, ptupuevcDominioInArg: any): Promise<void> {
        const request: {
            p_thisagentexproducto_oid: any, pt_p_evcdominio_oid: any
        } = {
            p_thisagentexproducto_oid: puthisAgentexProductoInArg, pt_p_evcdominio_oid: ptupuevcDominioInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tDELDOMINIOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
