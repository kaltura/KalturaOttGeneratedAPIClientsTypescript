
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaIngestStatusVodConfigurationArgs  extends KalturaObjectBaseArgs {
    isSupported? : boolean;
	retainingPeriod? : number;
}


export class KalturaIngestStatusVodConfiguration extends KalturaObjectBase {

    isSupported : boolean;
	retainingPeriod : number;

    constructor(data? : KalturaIngestStatusVodConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIngestStatusVodConfiguration' },
				isSupported : { type : 'b' },
				retainingPeriod : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIngestStatusVodConfiguration',KalturaIngestStatusVodConfiguration);
