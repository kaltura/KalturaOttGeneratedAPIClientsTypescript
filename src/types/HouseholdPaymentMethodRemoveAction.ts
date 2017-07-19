
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPaymentMethodRemoveActionArgs  extends KalturaRequestArgs {
    paymentGatewayId : number;
	paymentMethodId : number;
}

/** 
* Removes a payment method of the household.
**/
export class HouseholdPaymentMethodRemoveAction extends KalturaRequest<boolean> {

    paymentGatewayId : number;
	paymentMethodId : number;

    constructor(data : HouseholdPaymentMethodRemoveActionArgs)
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
				action : { type : 'c', default : 'remove' },
				paymentGatewayId : { type : 'n' },
				paymentMethodId : { type : 'n' }
            }
        );
        return result;
    }
}

