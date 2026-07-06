import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { QueryResponse } from '../common/answerRequestInformation';

/**
 * « Service and queries of class 'Gestor' »
 */
export class GestorServices extends AbstractServices {


    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'Gestor');
    }

    /**
     * Call to the filter 'F_Gestor' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfPrimerNombreVar Variable vfPrimerNombre
     * @param vfSegundoNombreVar Variable vfSegundoNombre
     * @param vfPrimerApeVar Variable vfPrimerApe
     * @param vfSegundoApeVar Variable vfSegundoApe
     */
    public queryByFilterFuGestor(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfPrimerNombreVar: string | null, vfSegundoNombreVar: string | null, vfPrimerApeVar: string | null,
        vfSegundoApeVar: string | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_Gestor');
        this.util.addFilterVariable(filter, 'vfprimernombre', vfPrimerNombreVar);
        this.util.addFilterVariable(filter, 'vfsegundonombre', vfSegundoNombreVar);
        this.util.addFilterVariable(filter, 'vfprimerape', vfPrimerApeVar);
        this.util.addFilterVariable(filter, 'vfsegundoape', vfSegundoApeVar);
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }
}
