
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTopicNotification } from './KalturaTopicNotification';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TopicNotificationAddActionArgs  extends KalturaRequestArgs {
    topicNotification : KalturaTopicNotification;
}

/**
 * Build request payload for service 'topicNotification' action 'add'.
 *
 * Usage: Add a new topic notification
 *
 * Server response type:         KalturaTopicNotification
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TopicNotificationAddAction extends KalturaRequest<KalturaTopicNotification> {

    topicNotification : KalturaTopicNotification;

    constructor(data : TopicNotificationAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaTopicNotification', responseConstructor : KalturaTopicNotification  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'topicnotification' },
				action : { type : 'c', default : 'add' },
				topicNotification : { type : 'o', subTypeConstructor : KalturaTopicNotification, subType : 'KalturaTopicNotification' }
            }
        );
        return result;
    }
}

