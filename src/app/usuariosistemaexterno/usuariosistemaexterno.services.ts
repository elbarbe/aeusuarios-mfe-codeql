import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'UsuarioSistemaExterno'
 */
export class UsuarioSistemaExternoServices extends AbstractServices {

    private crearSrvName = 'crear';
    private eliminarSrvName = 'eliminar';
    private modificarSrvName = 'modificar';
    private setPasswordSrvName = 'setPassword';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'UsuarioSistemaExterno');
    }

    /**
     * Call to the service 'crear' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puatrLoginInArg Mandatory argument 'p_atrLogin'
     * @param puatrDescripcionInArg Optional argument 'p_atrDescripcion'
     * @param pupasswordInArg Mandatory argument 'p_password'
     */
    public crear(
        puatrLoginInArg: string, puatrDescripcionInArg: string | null, pupasswordInArg: string): Promise<void> {
        const request: {
            p_atrlogin: string, p_atrdescripcion: string | null, p_password: string
        } = {
            p_atrlogin: puatrLoginInArg, p_atrdescripcion: puatrDescripcionInArg, p_password: pupasswordInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.crearSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'eliminar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisUsuarioSistemaExternoInArg Mandatory argument 'p_thisUsuarioSistemaExterno'. Oid of 'UsuarioSistemaExterno' class
     */
    public eliminar(
        puthisUsuarioSistemaExternoInArg: any): Promise<void> {
        const request: {
            p_thisusuariosistemaexterno_oid: any
        } = {
            p_thisusuariosistemaexterno_oid: puthisUsuarioSistemaExternoInArg
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
     * Call to the service 'modificar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisUsuarioSistemaExternoInArg Mandatory argument 'p_thisUsuarioSistemaExterno'. Oid of 'UsuarioSistemaExterno' class
     * @param puDescripcionInArg Optional argument 'p_Descripcion'
     */
    public modificar(
        puthisUsuarioSistemaExternoInArg: any, puDescripcionInArg: string | null): Promise<void> {
        const request: {
            p_thisusuariosistemaexterno_oid: any, p_descripcion: string | null
        } = {
            p_thisusuariosistemaexterno_oid: puthisUsuarioSistemaExternoInArg, p_descripcion: puDescripcionInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.modificarSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'setPassword' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisUsuarioSistemaExternoInArg Mandatory argument 'p_thisUsuarioSistemaExterno'. Oid of 'UsuarioSistemaExterno' class
     * @param puNewPasswordInArg Mandatory argument 'p_NewPassword'
     */
    public setPassword(
        puthisUsuarioSistemaExternoInArg: any, puNewPasswordInArg: string): Promise<void> {
        const request: {
            p_thisusuariosistemaexterno_oid: any, p_newpassword: string
        } = {
            p_thisusuariosistemaexterno_oid: puthisUsuarioSistemaExternoInArg, p_newpassword: puNewPasswordInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.setPasswordSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
