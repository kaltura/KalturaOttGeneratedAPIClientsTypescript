
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdQuota } from './KalturaHouseholdQuota';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdQuotaGetActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'householdQuota' action 'get'.
 *
 * Usage: Returns the household&#39;s quota data
 *
 * Server response type:         KalturaHouseholdQuota
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdQuotaGetAction extends KalturaRequest<KalturaHouseholdQuota> {

    

    constructor(data? : HouseholdQuotaGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHouseholdQuota', responseConstructor : KalturaHouseholdQuota  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdquota' },
				action : { type : 'c', default : 'get' }
            }
        );
        return result;
    }
}

