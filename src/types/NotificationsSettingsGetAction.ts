
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNotificationsSettings } from './KalturaNotificationsSettings';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface NotificationsSettingsGetActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'notificationsSettings' action 'get'.
 *
 * Usage: Retrieve the user’s notification settings
 *
 * Server response type:         KalturaNotificationsSettings
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class NotificationsSettingsGetAction extends KalturaRequest<KalturaNotificationsSettings> {

    

    constructor(data? : NotificationsSettingsGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaNotificationsSettings', responseConstructor : KalturaNotificationsSettings  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'notificationssettings' },
				action : { type : 'c', default : 'get' }
            }
        );
        return result;
    }
}

