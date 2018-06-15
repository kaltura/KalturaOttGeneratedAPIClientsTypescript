
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPaymentGatewayDisableActionArgs  extends KalturaRequestArgs {
    paymentGatewayId : number;
}

/**
 * Build request payload for service 'householdPaymentGateway' action 'disable'.
 *
 * Usage: Disable payment-gateway on the household
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdPaymentGatewayDisableAction extends KalturaRequest<boolean> {

    paymentGatewayId : number;

    constructor(data : HouseholdPaymentGatewayDisableActionArgs)
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
				action : { type : 'c', default : 'disable' },
				paymentGatewayId : { type : 'n' }
            }
        );
        return result;
    }
}

