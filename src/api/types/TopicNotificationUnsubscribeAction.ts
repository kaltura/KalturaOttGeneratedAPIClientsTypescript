
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TopicNotificationUnsubscribeActionArgs  extends KalturaRequestArgs {
    topicNotificationId : number;
}

/**
 * Build request payload for service 'topicNotification' action 'unsubscribe'.
 *
 * Usage: Unubscribe a user from a topic notification
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TopicNotificationUnsubscribeAction extends KalturaRequest<void> {

    topicNotificationId : number;

    constructor(data : TopicNotificationUnsubscribeActionArgs)
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
				action : { type : 'c', default : 'unsubscribe' },
				topicNotificationId : { type : 'n' }
            }
        );
        return result;
    }
}

