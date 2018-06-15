
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTopicListResponse } from './KalturaTopicListResponse';

import { KalturaTopicFilter } from './KalturaTopicFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TopicListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaTopicFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'topic' action 'list'.
 *
 * Usage: Get list of topics
 *
 * Server response type:         KalturaTopicListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TopicListAction extends KalturaRequest<KalturaTopicListResponse> {

    filter : KalturaTopicFilter;
	pager : KalturaFilterPager;

    constructor(data? : TopicListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaTopicListResponse', responseConstructor : KalturaTopicListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'topic' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaTopicFilter, subType : 'KalturaTopicFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

