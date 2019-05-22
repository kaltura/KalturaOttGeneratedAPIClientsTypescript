
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTopicNotificationMessage } from './KalturaTopicNotificationMessage';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TopicNotificationMessageAddActionArgs  extends KalturaRequestArgs {
    topicNotificationMessage : KalturaTopicNotificationMessage;
}

/**
 * Build request payload for service 'topicNotificationMessage' action 'add'.
 *
 * Usage: Add a new topic notification message
 *
 * Server response type:         KalturaTopicNotificationMessage
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TopicNotificationMessageAddAction extends KalturaRequest<KalturaTopicNotificationMessage> {

    topicNotificationMessage : KalturaTopicNotificationMessage;

    constructor(data : TopicNotificationMessageAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaTopicNotificationMessage', responseConstructor : KalturaTopicNotificationMessage  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'topicnotificationmessage' },
				action : { type : 'c', default : 'add' },
				topicNotificationMessage : { type : 'o', subTypeConstructor : KalturaTopicNotificationMessage, subType : 'KalturaTopicNotificationMessage' }
            }
        );
        return result;
    }
}

