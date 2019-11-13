
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationListResponse } from './KalturaEventNotificationListResponse';

import { KalturaEventNotificationFilter } from './KalturaEventNotificationFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationListActionArgs  extends KalturaRequestArgs {
    filter : KalturaEventNotificationFilter;
}

/**
 * Build request payload for service 'eventNotification' action 'list'.
 *
 * Usage: Gets all EventNotification items for a given Object id and type
 *
 * Server response type:         KalturaEventNotificationListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EventNotificationListAction extends KalturaRequest<KalturaEventNotificationListResponse> {

    filter : KalturaEventNotificationFilter;

    constructor(data : EventNotificationListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEventNotificationListResponse', responseConstructor : KalturaEventNotificationListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'eventnotification' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaEventNotificationFilter, subType : 'KalturaEventNotificationFilter' }
            }
        );
        return result;
    }
}

