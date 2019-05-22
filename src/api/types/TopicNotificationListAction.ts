
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTopicNotificationListResponse } from './KalturaTopicNotificationListResponse';

import { KalturaTopicNotificationFilter } from './KalturaTopicNotificationFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TopicNotificationListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaTopicNotificationFilter;
}

/**
 * Build request payload for service 'topicNotification' action 'list'.
 *
 * Usage: Lists all topic notifications in the system
 *
 * Server response type:         KalturaTopicNotificationListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TopicNotificationListAction extends KalturaRequest<KalturaTopicNotificationListResponse> {

    filter : KalturaTopicNotificationFilter;

    constructor(data? : TopicNotificationListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaTopicNotificationListResponse', responseConstructor : KalturaTopicNotificationListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'topicnotification' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaTopicNotificationFilter, subType : 'KalturaTopicNotificationFilter' }
            }
        );
        return result;
    }
}

