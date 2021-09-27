
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLineupNotificationSettingsArgs  extends KalturaObjectBaseArgs {
    enabled? : boolean;
}


export class KalturaLineupNotificationSettings extends KalturaObjectBase {

    enabled : boolean;

    constructor(data? : KalturaLineupNotificationSettingsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLineupNotificationSettings' },
				enabled : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLineupNotificationSettings',KalturaLineupNotificationSettings);
