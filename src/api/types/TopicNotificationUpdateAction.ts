
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTopicNotification } from './KalturaTopicNotification';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TopicNotificationUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	topicNotification : KalturaTopicNotification;
}

/**
 * Build request payload for service 'topicNotification' action 'update'.
 *
 * Usage: Update an existing topic notification
 *
 * Server response type:         KalturaTopicNotification
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TopicNotificationUpdateAction extends KalturaRequest<KalturaTopicNotification> {

    id : number;
	topicNotification : KalturaTopicNotification;

    constructor(data : TopicNotificationUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				topicNotification : { type : 'o', subTypeConstructor : KalturaTopicNotification, subType : 'KalturaTopicNotification' }
            }
        );
        return result;
    }
}

