
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdPaymentMethodListResponse } from './KalturaHouseholdPaymentMethodListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPaymentMethodListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'householdPaymentMethod' action 'list'.
 *
 * Usage: Get a list of all payment methods of the household
 *
 * Server response type:         KalturaHouseholdPaymentMethodListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdPaymentMethodListAction extends KalturaRequest<KalturaHouseholdPaymentMethodListResponse> {

    

    constructor(data? : HouseholdPaymentMethodListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHouseholdPaymentMethodListResponse', responseConstructor : KalturaHouseholdPaymentMethodListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdpaymentmethod' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

