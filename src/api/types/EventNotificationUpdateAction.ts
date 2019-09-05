
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotification } from './KalturaEventNotification';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	objectToUpdate : KalturaEventNotification;
}

/**
 * Build request payload for service 'eventNotification' action 'update'.
 *
 * Usage: eventNotification update
 *
 * Server response type:         KalturaEventNotification
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EventNotificationUpdateAction extends KalturaRequest<KalturaEventNotification> {

    id : string;
	objectToUpdate : KalturaEventNotification;

    constructor(data : EventNotificationUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEventNotification', responseConstructor : KalturaEventNotification  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'eventnotification' },
				action : { type : 'c', default : 'update' },
				id : { type : 's' },
				objectToUpdate : { type : 'o', subTypeConstructor : KalturaEventNotification, subType : 'KalturaEventNotification' }
            }
        );
        return result;
    }
}

