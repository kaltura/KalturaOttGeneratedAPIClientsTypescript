
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPaymentMethodForceRemoveActionArgs  extends KalturaRequestArgs {
    paymentGatewayId : number;
	paymentMethodId : number;
}

/**
 * Build request payload for service 'householdPaymentMethod' action 'forceRemove'.
 *
 * Usage: Force remove of a payment method of the household
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdPaymentMethodForceRemoveAction extends KalturaRequest<boolean> {

    paymentGatewayId : number;
	paymentMethodId : number;

    constructor(data : HouseholdPaymentMethodForceRemoveActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdpaymentmethod' },
				action : { type : 'c', default : 'forceRemove' },
				paymentGatewayId : { type : 'n' },
				paymentMethodId : { type : 'n' }
            }
        );
        return result;
    }
}

