
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdLimitationsListResponse } from './KalturaHouseholdLimitationsListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdLimitationsListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'householdLimitations' action 'list'.
 *
 * Usage: Get the list of PartnerConfiguration
 *
 * Server response type:         KalturaHouseholdLimitationsListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdLimitationsListAction extends KalturaRequest<KalturaHouseholdLimitationsListResponse> {

    

    constructor(data? : HouseholdLimitationsListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHouseholdLimitationsListResponse', responseConstructor : KalturaHouseholdLimitationsListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdlimitations' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

