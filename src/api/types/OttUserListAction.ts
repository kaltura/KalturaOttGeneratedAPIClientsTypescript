
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOTTUserListResponse } from './KalturaOTTUserListResponse';

import { KalturaOTTUserFilter } from './KalturaOTTUserFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaOTTUserFilter;
}

/**
 * Build request payload for service 'ottUser' action 'list'.
 *
 * Usage: Returns list of OTTUser (limited to 500 items). Filters by username/external identifier/idIn or roleIdIn
 *
 * Server response type:         KalturaOTTUserListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OttUserListAction extends KalturaRequest<KalturaOTTUserListResponse> {

    filter : KalturaOTTUserFilter;

    constructor(data? : OttUserListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaOTTUserListResponse', responseConstructor : KalturaOTTUserListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottuser' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaOTTUserFilter, subType : 'KalturaOTTUserFilter' }
            }
        );
        return result;
    }
}

