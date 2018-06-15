
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPersonalFeedListResponse } from './KalturaPersonalFeedListResponse';

import { KalturaPersonalFeedFilter } from './KalturaPersonalFeedFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PersonalFeedListActionArgs  extends KalturaRequestArgs {
    filter : KalturaPersonalFeedFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'personalFeed' action 'list'.
 *
 * Usage: List user&#39;s feeds.
 * Possible status codes:
 *
 * Server response type:         KalturaPersonalFeedListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PersonalFeedListAction extends KalturaRequest<KalturaPersonalFeedListResponse> {

    filter : KalturaPersonalFeedFilter;
	pager : KalturaFilterPager;

    constructor(data : PersonalFeedListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPersonalFeedListResponse', responseConstructor : KalturaPersonalFeedListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'personalfeed' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaPersonalFeedFilter, subType : 'KalturaPersonalFeedFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

