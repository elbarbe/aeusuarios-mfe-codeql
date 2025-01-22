import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Funcionario'
 */
export class FuncionarioServices extends AbstractServices {

    private tCAMBIARDISPONIBLESrvName = 'TCAMBIARDISPONIBLE';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Funcionario');
    }

    /**
     * Call to the filter 'F_Funcionario_PorNombreNoAseso' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfPriNomVar Variable vfPriNom
     * @param vfSegNomVar Variable vfSegNom
     * @param vfPriApeVar Variable vfPriApe
     * @param vfSegApeVar Variable vfSegApe
     */
    public queryByFilterFuFuncionariouPorNombreNoAseso(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfPriNomVar: string | null, vfSegNomVar: string | null, vfPriApeVar: string | null,
        vfSegApeVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_Funcionario_PorNombreNoAseso');
        this.util.addFilterVariable(filter, 'vfprinom', vfPriNomVar);
        this.util.addFilterVariable(filter, 'vfsegnom', vfSegNomVar);
        this.util.addFilterVariable(filter, 'vfpriape', vfPriApeVar);
        this.util.addFilterVariable(filter, 'vfsegape', vfSegApeVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidRol Oid of related 'Rol' instance using the role 'Rol'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedRol(
        oidRol: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidRol, 'Rol');
    }

    /**
     * @param oidSucursal Oid of related 'Sucursal' instance using the role 'Sucursal'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSucursal(
        oidSucursal: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSucursal, 'Sucursal');
    }

    /**
     * @param oidLogFuncionario Oid of related 'LogFuncionario' instance using the role 'LogFuncionario'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLogFuncionario(
        oidLogFuncionario: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLogFuncionario, 'LogFuncionario');
    }

    /**
     * Call to the service 'TCAMBIARDISPONIBLE' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisFuncionarioInArg Mandatory argument 'p_thisFuncionario'. Oid of 'Funcionario' class
     * @param ptupeDisponibleInArg Mandatory argument 'pt_peDisponible'
     */
    public tCAMBIARDISPONIBLE(
        puthisFuncionarioInArg: any, ptupeDisponibleInArg: boolean): Promise<void> {
        const request: {
            p_thisfuncionario_oid: any, pt_pedisponible: boolean
        } = {
            p_thisfuncionario_oid: puthisFuncionarioInArg, pt_pedisponible: ptupeDisponibleInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCAMBIARDISPONIBLESrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
