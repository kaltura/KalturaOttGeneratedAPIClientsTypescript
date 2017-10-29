
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNotificationsPartnerSettings } from './KalturaNotificationsPartnerSettings';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface NotificationsPartnerSettingsGetActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'notificationsPartnerSettings' action 'get'.
 *
 * Usage: Retrieve the partner notification settings
 *
 * Server response type:         KalturaNotificationsPartnerSettings
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class NotificationsPartnerSettingsGetAction extends KalturaRequest<KalturaNotificationsPartnerSettings> {

    

    constructor(data? : NotificationsPartnerSettingsGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaNotificationsPartnerSettings', responseConstructor : KalturaNotificationsPartnerSettings  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'notificationspartnersettings' },
				action : { type : 'c', default : 'get' }
            }
        );
        return result;
    }
}

