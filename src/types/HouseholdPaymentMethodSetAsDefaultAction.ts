
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPaymentMethodSetAsDefaultActionArgs  extends KalturaRequestArgs {
    paymentGatewayId : number;
	paymentMethodId : number;
}

/** 
* Set a payment method as default for the household.
**/
export class HouseholdPaymentMethodSetAsDefaultAction extends KalturaRequest<boolean> {

    paymentGatewayId : number;
	paymentMethodId : number;

    constructor(data : HouseholdPaymentMethodSetAsDefaultActionArgs)
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
				action : { type : 'c', default : 'setAsDefault' },
				paymentGatewayId : { type : 'n' },
				paymentMethodId : { type : 'n' }
            }
        );
        return result;
    }
}

