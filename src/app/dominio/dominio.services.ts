import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Dominio'
 */
export class DominioServices extends AbstractServices {


    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Dominio');
    }

    /**
     * Call to the filter 'F_DominioVarios' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vouProductoVar Variable vo_Producto
     * @param vouPlanVar Variable vo_Plan
     * @param vuNuevaAfiliacionVar Variable v_NuevaAfiliacion
     * @param vuInclusionVar Variable v_Inclusion
     * @param vouRolVar Variable vo_Rol
     */
    public queryByFilterFuDominioVarios(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vouProductoVar: any, vouPlanVar: any, vuNuevaAfiliacionVar: boolean | null, vuInclusionVar: boolean | null,
        vouRolVar: any): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_DominioVarios');
        this.util.addFilterVariable(filter, 'vo_producto', vouProductoVar);
        this.util.addFilterVariable(filter, 'vo_plan', vouPlanVar);
        this.util.addFilterVariable(filter, 'v_nuevaafiliacion', vuNuevaAfiliacionVar);
        this.util.addFilterVariable(filter, 'v_inclusion', vuInclusionVar);
        this.util.addFilterVariable(filter, 'vo_rol', vouRolVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidPlanT Oid of related 'Planes' instance using the role 'PlanT'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPlanT(
        oidPlanT: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPlanT, 'PlanT');
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
     * @param oidRoles Oid of related 'Rol' instance using the role 'Roles'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedRoles(
        oidRoles: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidRoles, 'Roles');
    }

    /**
     * @param oidDominiosIncompatibles Oid of related 'Dominio' instance using the role 'DominiosIncompatibles'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDominiosIncompatibles(
        oidDominiosIncompatibles: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDominiosIncompatibles, 'DominiosIncompatibles');
    }

    /**
     * @param oidDominiosConIncompatibilidad Oid of related 'Dominio' instance using the role 'DominiosConIncompatibilidad'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDominiosConIncompatibilidad(
        oidDominiosConIncompatibilidad: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDominiosConIncompatibilidad, 'DominiosConIncompatibilidad');
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
}
