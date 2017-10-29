
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdUserListResponse } from './KalturaHouseholdUserListResponse';

import { KalturaHouseholdUserFilter } from './KalturaHouseholdUserFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdUserListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaHouseholdUserFilter;
}

/**
 * Build request payload for service 'householdUser' action 'list'.
 *
 * Usage: Returns the users within the household
 *
 * Server response type:         KalturaHouseholdUserListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdUserListAction extends KalturaRequest<KalturaHouseholdUserListResponse> {

    filter : KalturaHouseholdUserFilter;

    constructor(data? : HouseholdUserListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHouseholdUserListResponse', responseConstructor : KalturaHouseholdUserListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householduser' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaHouseholdUserFilter, subType : 'KalturaHouseholdUserFilter' }
            }
        );
        return result;
    }
}

