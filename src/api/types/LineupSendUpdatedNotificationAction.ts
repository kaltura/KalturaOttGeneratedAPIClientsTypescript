
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LineupSendUpdatedNotificationActionArgs  extends KalturaRequestArgs {
    regionIds : string;
}

/**
 * Build request payload for service 'lineup' action 'sendUpdatedNotification'.
 *
 * Usage: Sends lineup update requested notification
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LineupSendUpdatedNotificationAction extends KalturaRequest<boolean> {

    regionIds : string;

    constructor(data : LineupSendUpdatedNotificationActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'lineup' },
				action : { type : 'c', default : 'sendUpdatedNotification' },
				regionIds : { type : 's' }
            }
        );
        return result;
    }
}

