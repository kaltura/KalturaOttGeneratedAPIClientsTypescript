
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEpgNotificationSettingsArgs  extends KalturaObjectBaseArgs {
    enabled? : boolean;
	deviceFamilyIds? : string;
	liveAssetIds? : string;
	timeRange? : number;
}


export class KalturaEpgNotificationSettings extends KalturaObjectBase {

    enabled : boolean;
	deviceFamilyIds : string;
	liveAssetIds : string;
	timeRange : number;

    constructor(data? : KalturaEpgNotificationSettingsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEpgNotificationSettings' },
				enabled : { type : 'b' },
				deviceFamilyIds : { type : 's' },
				liveAssetIds : { type : 's' },
				timeRange : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEpgNotificationSettings',KalturaEpgNotificationSettings);
