import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'Afiliaciones'
 */
export class AfiliacionesServices extends AbstractServices {

    private insPlanSrvName = 'InsPlan';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Afiliaciones');
    }

    /**
     * Call to the filter 'F_AfiliacionesPorNombre' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vUsuarioVar Variable vUsuario
     * @param vPrimerNombreVar Variable vPrimerNombre
     * @param vSegundoNombreVar Variable vSegundoNombre
     * @param vPrimerApeVar Variable vPrimerApe
     * @param vSegundoApeVar Variable vSegundoApe
     */
    public queryByFilterFuAfiliacionesPorNombre(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vUsuarioVar: string | null, vPrimerNombreVar: string | null, vSegundoNombreVar: string | null, vPrimerApeVar: string | null,
        vSegundoApeVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_AfiliacionesPorNombre');
        this.util.addFilterVariable(filter, 'vusuario', vUsuarioVar);
        this.util.addFilterVariable(filter, 'vprimernombre', vPrimerNombreVar);
        this.util.addFilterVariable(filter, 'vsegundonombre', vSegundoNombreVar);
        this.util.addFilterVariable(filter, 'vprimerape', vPrimerApeVar);
        this.util.addFilterVariable(filter, 'vsegundoape', vSegundoApeVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidPlanes Oid of related 'Planes' instance using the role 'Planes'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedPlanes(
        oidPlanes: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidPlanes, 'Planes');
    }

    /**
     * Call to the service 'InsPlan' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisAfiliacionesInArg Mandatory argument 'p_thisAfiliaciones'. Oid of 'Afiliaciones' class
     * @param puevcPlanesInArg Mandatory argument 'p_evcPlanes'. Oid of 'Planes' class
     */
    public insPlan(
        puthisAfiliacionesInArg: any, puevcPlanesInArg: any): Promise<void> {
        const request: {
            p_thisafiliaciones_oid: any, p_evcplanes_oid: any
        } = {
            p_thisafiliaciones_oid: puthisAfiliacionesInArg, p_evcplanes_oid: puevcPlanesInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.insPlanSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
