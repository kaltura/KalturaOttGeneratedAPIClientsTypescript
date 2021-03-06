
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRoleListResponse } from './KalturaUserRoleListResponse';

import { KalturaUserRoleFilter } from './KalturaUserRoleFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserRoleListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaUserRoleFilter;
}

/**
 * Build request payload for service 'userRole' action 'list'.
 *
 * Usage: Retrieving user roles by identifiers, if filter is empty, returns all partner roles
 *
 * Server response type:         KalturaUserRoleListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserRoleListAction extends KalturaRequest<KalturaUserRoleListResponse> {

    filter : KalturaUserRoleFilter;

    constructor(data? : UserRoleListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserRoleListResponse', responseConstructor : KalturaUserRoleListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userrole' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaUserRoleFilter, subType : 'KalturaUserRoleFilter' }
            }
        );
        return result;
    }
}

