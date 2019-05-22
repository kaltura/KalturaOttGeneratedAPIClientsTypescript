
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTopicNotificationMessageListResponse } from './KalturaTopicNotificationMessageListResponse';

import { KalturaTopicNotificationMessageFilter } from './KalturaTopicNotificationMessageFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TopicNotificationMessageListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaTopicNotificationMessageFilter;
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
				filter : { type : 'o', subTypeConstructor : KalturaTopicNotificationMessageFilter, subType : 'KalturaTopicNotificationMessageFilter' }
            }
        );
        return result;
    }
}

