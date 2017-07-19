
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPaymentGatewayEnableActionArgs  extends KalturaRequestArgs {
    paymentGatewayId : number;
}

/** 
* Enable a payment-gateway provider for the household.
**/
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

