
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaSuspendSettings } from './KalturaSuspendSettings';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPaymentGatewaySuspendActionArgs  extends KalturaRequestArgs {
    paymentGatewayId : number;
	suspendSettings? : KalturaSuspendSettings;
}

/**
 * Build request payload for service 'householdPaymentGateway' action 'suspend'.
 *
 * Usage: Suspends all the entitlements of the given payment gateway
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdPaymentGatewaySuspendAction extends KalturaRequest<void> {

    paymentGatewayId : number;
	suspendSettings : KalturaSuspendSettings;

    constructor(data : HouseholdPaymentGatewaySuspendActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdpaymentgateway' },
				action : { type : 'c', default : 'suspend' },
				paymentGatewayId : { type : 'n' },
				suspendSettings : { type : 'o', subTypeConstructor : KalturaSuspendSettings, subType : 'KalturaSuspendSettings' }
            }
        );
        return result;
    }
}

