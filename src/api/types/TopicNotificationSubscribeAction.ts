
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TopicNotificationSubscribeActionArgs  extends KalturaRequestArgs {
    topicNotificationId : number;
}

/**
 * Build request payload for service 'topicNotification' action 'subscribe'.
 *
 * Usage: Subscribe a user to a topic notification
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TopicNotificationSubscribeAction extends KalturaRequest<void> {

    topicNotificationId : number;

    constructor(data : TopicNotificationSubscribeActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'topicnotification' },
				action : { type : 'c', default : 'subscribe' },
				topicNotificationId : { type : 'n' }
            }
        );
        return result;
    }
}

