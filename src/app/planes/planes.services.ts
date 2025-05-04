import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Planes'
 */
export class PlanesServices extends AbstractServices {

    private delPlanSrvName = 'DelPlan';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Planes');
    }

    /**
     * Call to the filter 'F_PlanVarios' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vouProductoVar Variable vo_Producto
     * @param vuNombreVar Variable v_Nombre
     * @param vuEsBancoRepVar Variable v_EsBancoRep
     * @param vEsVoluntarioVar Variable vEsVoluntario
     */
    public queryByFilterFuPlanVarios(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vouProductoVar: any, vuNombreVar: string | null, vuEsBancoRepVar: boolean | null,
        vEsVoluntarioVar: boolean | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_PlanVarios');
        this.util.addFilterVariable(filter, 'vo_producto', vouProductoVar);
        this.util.addFilterVariable(filter, 'v_nombre', vuNombreVar);
        this.util.addFilterVariable(filter, 'v_esbancorep', vuEsBancoRepVar);
        this.util.addFilterVariable(filter, 'vesvoluntario', vEsVoluntarioVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
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
     * @param oidAfiliaciones Oid of related 'Afiliaciones' instance using the role 'Afiliaciones'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedAfiliaciones(
        oidAfiliaciones: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidAfiliaciones, 'Afiliaciones');
    }

    /**
     * Call to the service 'DelPlan' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisPlanesInArg Mandatory argument 'p_thisPlanes'. Oid of 'Planes' class
     * @param puevcAfiliacionesInArg Mandatory argument 'p_evcAfiliaciones'. Oid of 'Afiliaciones' class
     */
    public delPlan(
        puthisPlanesInArg: any, puevcAfiliacionesInArg: any): Promise<void> {
        const request: {
            p_thisplanes_oid: any, p_evcafiliaciones_oid: any
        } = {
            p_thisplanes_oid: puthisPlanesInArg, p_evcafiliaciones_oid: puevcAfiliacionesInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.delPlanSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
