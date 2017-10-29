
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocialCommentListResponse } from './KalturaSocialCommentListResponse';

import { KalturaSocialCommentFilter } from './KalturaSocialCommentFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SocialCommentListActionArgs  extends KalturaRequestArgs {
    filter : KalturaSocialCommentFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'socialComment' action 'list'.
 *
 * Usage: Get a list of all social comments filtered by asset ID and social platform
 *
 * Server response type:         KalturaSocialCommentListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SocialCommentListAction extends KalturaRequest<KalturaSocialCommentListResponse> {

    filter : KalturaSocialCommentFilter;
	pager : KalturaFilterPager;

    constructor(data : SocialCommentListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSocialCommentListResponse', responseConstructor : KalturaSocialCommentListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'socialcomment' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaSocialCommentFilter, subType : 'KalturaSocialCommentFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

