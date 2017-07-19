
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdPaymentGatewayListResponse } from './KalturaHouseholdPaymentGatewayListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPaymentGatewayListActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Get a list of all configured Payment Gateways providers available for the
* account. For each payment is provided with the household associated payment
* methods.
**/
export class HouseholdPaymentGatewayListAction extends KalturaRequest<KalturaHouseholdPaymentGatewayListResponse> {

    

    constructor(data? : HouseholdPaymentGatewayListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHouseholdPaymentGatewayListResponse', responseConstructor : KalturaHouseholdPaymentGatewayListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdpaymentgateway' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

