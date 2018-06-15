
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdPremiumServiceListResponse } from './KalturaHouseholdPremiumServiceListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPremiumServiceListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'householdPremiumService' action 'list'.
 *
 * Usage: Returns all the premium services allowed for the household
 *
 * Server response type:         KalturaHouseholdPremiumServiceListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdPremiumServiceListAction extends KalturaRequest<KalturaHouseholdPremiumServiceListResponse> {

    

    constructor(data? : HouseholdPremiumServiceListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHouseholdPremiumServiceListResponse', responseConstructor : KalturaHouseholdPremiumServiceListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdpremiumservice' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

