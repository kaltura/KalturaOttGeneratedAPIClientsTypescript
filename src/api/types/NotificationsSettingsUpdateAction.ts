
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaNotificationsSettings } from './KalturaNotificationsSettings';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface NotificationsSettingsUpdateActionArgs  extends KalturaRequestArgs {
    settings : KalturaNotificationsSettings;
}

/**
 * Build request payload for service 'notificationsSettings' action 'update'.
 *
 * Usage: Update the user’s notification settings
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class NotificationsSettingsUpdateAction extends KalturaRequest<boolean> {

    settings : KalturaNotificationsSettings;

    constructor(data : NotificationsSettingsUpdateActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'notificationssettings' },
				action : { type : 'c', default : 'update' },
				settings : { type : 'o', subTypeConstructor : KalturaNotificationsSettings, subType : 'KalturaNotificationsSettings' }
            }
        );
        return result;
    }
}

