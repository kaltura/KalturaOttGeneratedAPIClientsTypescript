
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNotificationsSettings } from './KalturaNotificationsSettings';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface NotificationsSettingsGetActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Retrieve the user’s notification settings.
**/
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

