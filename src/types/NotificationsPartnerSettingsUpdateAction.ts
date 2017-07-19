
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaNotificationsPartnerSettings } from './KalturaNotificationsPartnerSettings';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface NotificationsPartnerSettingsUpdateActionArgs  extends KalturaRequestArgs {
    settings : KalturaNotificationsPartnerSettings;
}

/** 
* Update the account notification settings
**/
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

