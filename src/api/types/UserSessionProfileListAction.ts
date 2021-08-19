
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserSessionProfileListResponse } from './KalturaUserSessionProfileListResponse';

import { KalturaUserSessionProfileFilter } from './KalturaUserSessionProfileFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserSessionProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaUserSessionProfileFilter;
}

/**
 * Build request payload for service 'userSessionProfile' action 'list'.
 *
 * Usage: Returns the list of available UserSessionProfiles
 *
 * Server response type:         KalturaUserSessionProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserSessionProfileListAction extends KalturaRequest<KalturaUserSessionProfileListResponse> {

    filter : KalturaUserSessionProfileFilter;

    constructor(data? : UserSessionProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserSessionProfileListResponse', responseConstructor : KalturaUserSessionProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'usersessionprofile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaUserSessionProfileFilter, subType : 'KalturaUserSessionProfileFilter' }
            }
        );
        return result;
    }
}

