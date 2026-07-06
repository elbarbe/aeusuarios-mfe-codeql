import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { AbstractIU } from '../common/baseIUElements';
import { Field } from '../common/baseIUElements';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
/**
 * « Implements outbound arguments global SIU SIU_OGSINCASESORES »
 */
    selector: 'imes-gs-siu-ogsincasesores-out',
    templateUrl: './siu_ogsincasesores_out.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuOGSINCASESORESuOutComponent  extends AbstractIU implements OnInit {

    /** Outbound argument oaMensaje */
    public oaMensaje: Field;

    /** Service request */
    private serviceRequest: any;
    /** Service response */
    private serviceResponse: any;
    /** Exchange info */
    private exchangeInfo: ExchangeInfo = new ExchangeInfo();

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param condNavMng Conditinal navigation manager
     */
    constructor(
        protected override appGlobalInfo: AppGlobalInfo,
        protected override util: Util,
        protected override changeDetectorRef: ChangeDetectorRef,
        public langMng: LanguageMng,
        protected condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.className = ModelConstants.Globalservices.name;
        this.iuName = 'siu_ogsincasesores_out';
        this.title = this.langMng.translateText('gs_OGSINCASESORES',
            'Sincronizar asesores');

        // Create outbound argument components
        this.oaMensaje = new Field(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initialize(): void {
        this.oaMensaje.nameInRequest = 'oamensaje';
        this.oaMensaje.alias = this.langMng.translateText(
            'gs_OGSINCASESORES_outArg_oaMensaje',
            'Aviso');
        this.oaMensaje.dataType = Field.dtText;
        this.oaMensaje.enabled = false;
        this.oaMensaje.assignCSS();

        // Get request and response from the exchange information
        this.exchangeInfo = this.appGlobalInfo.appExchangeInfo.getExchangeInfoForScenario(this.className, this.iuName);
        if (this.exchangeInfo) {
            this.serviceRequest = this.exchangeInfo.customData.request;
            this.serviceResponse = this.exchangeInfo.customData.response;
            if (this.serviceRequest && this.serviceResponse) {
                this.initializeFromResponse();
            }
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Initialize the scenario using the response information
     */
    public initializeFromResponse(): void {
        this.oaMensaje.value =
            this.serviceResponse[this.oaMensaje.nameInRequest];
    }

}
