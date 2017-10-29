
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocialActionListResponse } from './KalturaSocialActionListResponse';

import { KalturaSocialActionFilter } from './KalturaSocialActionFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SocialActionListActionArgs  extends KalturaRequestArgs {
    filter : KalturaSocialActionFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'socialAction' action 'list'.
 *
 * Usage: Get list of user social actions
 *
 * Server response type:         KalturaSocialActionListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SocialActionListAction extends KalturaRequest<KalturaSocialActionListResponse> {

    filter : KalturaSocialActionFilter;
	pager : KalturaFilterPager;

    constructor(data : SocialActionListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSocialActionListResponse', responseConstructor : KalturaSocialActionListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'socialaction' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaSocialActionFilter, subType : 'KalturaSocialActionFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

