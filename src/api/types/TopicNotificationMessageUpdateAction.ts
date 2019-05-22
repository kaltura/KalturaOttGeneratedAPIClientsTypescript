
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTopicNotificationMessage } from './KalturaTopicNotificationMessage';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TopicNotificationMessageUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	topicNotificationMessage : KalturaTopicNotificationMessage;
}

/**
 * Build request payload for service 'topicNotificationMessage' action 'update'.
 *
 * Usage: Update an existing topic notification message
 *
 * Server response type:         KalturaTopicNotificationMessage
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TopicNotificationMessageUpdateAction extends KalturaRequest<KalturaTopicNotificationMessage> {

    id : number;
	topicNotificationMessage : KalturaTopicNotificationMessage;

    constructor(data : TopicNotificationMessageUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				topicNotificationMessage : { type : 'o', subTypeConstructor : KalturaTopicNotificationMessage, subType : 'KalturaTopicNotificationMessage' }
            }
        );
        return result;
    }
}

