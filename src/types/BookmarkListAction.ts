
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBookmarkListResponse } from './KalturaBookmarkListResponse';

import { KalturaBookmarkFilter } from './KalturaBookmarkFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BookmarkListActionArgs  extends KalturaRequestArgs {
    filter : KalturaBookmarkFilter;
}

/**
 * Build request payload for service 'bookmark' action 'list'.
 *
 * Usage: Returns player position record/s for the requested asset and the requesting user.
 * If default user makes the request – player position records are provided for all of the users in the household.
 * If non-default user makes the request - player position records are provided for the requesting user and the default user of the household
 *
 * Server response type:         KalturaBookmarkListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BookmarkListAction extends KalturaRequest<KalturaBookmarkListResponse> {

    filter : KalturaBookmarkFilter;

    constructor(data : BookmarkListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBookmarkListResponse', responseConstructor : KalturaBookmarkListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'bookmark' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaBookmarkFilter, subType : 'KalturaBookmarkFilter' }
            }
        );
        return result;
    }
}

