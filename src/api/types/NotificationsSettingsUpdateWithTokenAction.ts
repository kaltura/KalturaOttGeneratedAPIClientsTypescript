
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaNotificationsSettings } from './KalturaNotificationsSettings';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface NotificationsSettingsUpdateWithTokenActionArgs  extends KalturaRequestArgs {
    settings : KalturaNotificationsSettings;
	token : string;
	partnerId : number;
}

/**
 * Build request payload for service 'notificationsSettings' action 'updateWithToken'.
 *
 * Usage: Update the user’s notification settings
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class NotificationsSettingsUpdateWithTokenAction extends KalturaRequest<boolean> {

    settings : KalturaNotificationsSettings;
	token : string;
	partnerId : number;

    constructor(data : NotificationsSettingsUpdateWithTokenActionArgs)
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
				action : { type : 'c', default : 'updateWithToken' },
				settings : { type : 'o', subTypeConstructor : KalturaNotificationsSettings, subType : 'KalturaNotificationsSettings' },
				token : { type : 's' },
				partnerId : { type : 'n' }
            }
        );
        return result;
    }
}

