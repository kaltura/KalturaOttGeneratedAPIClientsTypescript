
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserSegmentListResponse } from './KalturaUserSegmentListResponse';

import { KalturaUserSegmentFilter } from './KalturaUserSegmentFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserSegmentListActionArgs  extends KalturaRequestArgs {
    filter : KalturaUserSegmentFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'userSegment' action 'list'.
 *
 * Usage: Retrieve all the segments that apply for this user
 *
 * Server response type:         KalturaUserSegmentListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserSegmentListAction extends KalturaRequest<KalturaUserSegmentListResponse> {

    filter : KalturaUserSegmentFilter;
	pager : KalturaFilterPager;

    constructor(data : UserSegmentListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserSegmentListResponse', responseConstructor : KalturaUserSegmentListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'usersegment' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaUserSegmentFilter, subType : 'KalturaUserSegmentFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

