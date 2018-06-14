
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaPushMessage } from './KalturaPushMessage';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface NotificationSendPushActionArgs  extends KalturaRequestArgs {
    userId : number;
	pushMessage : KalturaPushMessage;
}

/**
 * Build request payload for service 'notification' action 'sendPush'.
 *
 * Usage: Sends push notification to user devices
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class NotificationSendPushAction extends KalturaRequest<boolean> {

    userId : number;
	pushMessage : KalturaPushMessage;

    constructor(data : NotificationSendPushActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'notification' },
				action : { type : 'c', default : 'sendPush' },
				userId : { type : 'n' },
				pushMessage : { type : 'o', subTypeConstructor : KalturaPushMessage, subType : 'KalturaPushMessage' }
            }
        );
        return result;
    }
}

