
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocialFriendActivityListResponse } from './KalturaSocialFriendActivityListResponse';

import { KalturaSocialFriendActivityFilter } from './KalturaSocialFriendActivityFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SocialFriendActivityListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaSocialFriendActivityFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'socialFriendActivity' action 'list'.
 *
 * Usage: Get a list of the social friends activity for a user
 *
 * Server response type:         KalturaSocialFriendActivityListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SocialFriendActivityListAction extends KalturaRequest<KalturaSocialFriendActivityListResponse> {

    filter : KalturaSocialFriendActivityFilter;
	pager : KalturaFilterPager;

    constructor(data? : SocialFriendActivityListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSocialFriendActivityListResponse', responseConstructor : KalturaSocialFriendActivityListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'socialfriendactivity' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaSocialFriendActivityFilter, subType : 'KalturaSocialFriendActivityFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

