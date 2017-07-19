
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPaymentGatewayDisableActionArgs  extends KalturaRequestArgs {
    paymentGatewayId : number;
}

/** 
* Disable payment-gateway on the household
**/
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

