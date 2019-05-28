
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTopicNotificationMessageListResponse } from './KalturaTopicNotificationMessageListResponse';

import { KalturaTopicNotificationMessageFilter } from './KalturaTopicNotificationMessageFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TopicNotificationMessageListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaTopicNotificationMessageFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'topicNotificationMessage' action 'list'.
 *
 * Usage: Lists all topic notifications in the system
 *
 * Server response type:         KalturaTopicNotificationMessageListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TopicNotificationMessageListAction extends KalturaRequest<KalturaTopicNotificationMessageListResponse> {

    filter : KalturaTopicNotificationMessageFilter;
	pager : KalturaFilterPager;

    constructor(data? : TopicNotificationMessageListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaTopicNotificationMessageListResponse', responseConstructor : KalturaTopicNotificationMessageListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'topicnotificationmessage' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaTopicNotificationMessageFilter, subType : 'KalturaTopicNotificationMessageFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

