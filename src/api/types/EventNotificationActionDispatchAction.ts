
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaEventNotificationScope } from './KalturaEventNotificationScope';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationActionDispatchActionArgs  extends KalturaRequestArgs {
    scope : KalturaEventNotificationScope;
}

/**
 * Build request payload for service 'eventNotificationAction' action 'dispatch'.
 *
 * Usage: Dispatches event notification
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EventNotificationActionDispatchAction extends KalturaRequest<boolean> {

    scope : KalturaEventNotificationScope;

    constructor(data : EventNotificationActionDispatchActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'eventnotificationaction' },
				action : { type : 'c', default : 'dispatch' },
				scope : { type : 'o', subTypeConstructor : KalturaEventNotificationScope, subType : 'KalturaEventNotificationScope' }
            }
        );
        return result;
    }
}

