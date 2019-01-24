
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaNotificationsSettingsArgs  extends KalturaObjectBaseArgs {
    pushNotificationEnabled? : boolean;
	pushFollowEnabled? : boolean;
}


export class KalturaNotificationsSettings extends KalturaObjectBase {

    pushNotificationEnabled : boolean;
	pushFollowEnabled : boolean;

    constructor(data? : KalturaNotificationsSettingsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaNotificationsSettings' },
				pushNotificationEnabled : { type : 'b' },
				pushFollowEnabled : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaNotificationsSettings',KalturaNotificationsSettings);
