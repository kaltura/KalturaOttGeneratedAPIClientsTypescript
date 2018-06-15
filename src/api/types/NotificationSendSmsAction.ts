
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface NotificationSendSmsActionArgs  extends KalturaRequestArgs {
    message : string;
}

/**
 * Build request payload for service 'notification' action 'sendSms'.
 *
 * Usage: Sends SMS notification to user
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class NotificationSendSmsAction extends KalturaRequest<boolean> {

    message : string;

    constructor(data : NotificationSendSmsActionArgs)
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
				action : { type : 'c', default : 'sendSms' },
				message : { type : 's' }
            }
        );
        return result;
    }
}

