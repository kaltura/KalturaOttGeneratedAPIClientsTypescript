
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCDNPartnerSettingsArgs  extends KalturaObjectBaseArgs {
    defaultAdapterId? : number;
	defaultRecordingAdapterId? : number;
}


export class KalturaCDNPartnerSettings extends KalturaObjectBase {

    defaultAdapterId : number;
	defaultRecordingAdapterId : number;

    constructor(data? : KalturaCDNPartnerSettingsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCDNPartnerSettings' },
				defaultAdapterId : { type : 'n' },
				defaultRecordingAdapterId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCDNPartnerSettings',KalturaCDNPartnerSettings);
