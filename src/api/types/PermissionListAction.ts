
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionListResponse } from './KalturaPermissionListResponse';

import { KalturaBasePermissionFilter } from './KalturaBasePermissionFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaBasePermissionFilter;
}

/**
 * Build request payload for service 'permission' action 'list'.
 *
 * Usage: Retrieving permissions by identifiers, if filter is empty, returns all partner permissions
 *
 * Server response type:         KalturaPermissionListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PermissionListAction extends KalturaRequest<KalturaPermissionListResponse> {

    filter : KalturaBasePermissionFilter;

    constructor(data? : PermissionListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPermissionListResponse', responseConstructor : KalturaPermissionListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'permission' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaBasePermissionFilter, subType : 'KalturaBasePermissionFilter' }
            }
        );
        return result;
    }
}

