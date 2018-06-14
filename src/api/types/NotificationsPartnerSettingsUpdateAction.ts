
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaNotificationsPartnerSettings } from './KalturaNotificationsPartnerSettings';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface NotificationsPartnerSettingsUpdateActionArgs  extends KalturaRequestArgs {
    settings : KalturaNotificationsPartnerSettings;
}

/**
 * Build request payload for service 'notificationsPartnerSettings' action 'update'.
 *
 * Usage: Update the account notification settings
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class NotificationsPartnerSettingsUpdateAction extends KalturaRequest<boolean> {

    settings : KalturaNotificationsPartnerSettings;

    constructor(data : NotificationsPartnerSettingsUpdateActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'notificationspartnersettings' },
				action : { type : 'c', default : 'update' },
				settings : { type : 'o', subTypeConstructor : KalturaNotificationsPartnerSettings, subType : 'KalturaNotificationsPartnerSettings' }
            }
        );
        return result;
    }
}

