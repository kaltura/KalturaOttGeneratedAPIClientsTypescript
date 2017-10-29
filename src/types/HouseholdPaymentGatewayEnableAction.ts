
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPaymentGatewayEnableActionArgs  extends KalturaRequestArgs {
    paymentGatewayId : number;
}

/**
 * Build request payload for service 'householdPaymentGateway' action 'enable'.
 *
 * Usage: Enable a payment-gateway provider for the household
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdPaymentGatewayEnableAction extends KalturaRequest<boolean> {

    paymentGatewayId : number;

    constructor(data : HouseholdPaymentGatewayEnableActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdpaymentgateway' },
				action : { type : 'c', default : 'enable' },
				paymentGatewayId : { type : 'n' }
            }
        );
        return result;
    }
}

