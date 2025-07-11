
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaRecordingFilterArgs  extends KalturaFilterArgs {
    statusIn? : string;
	assetIdIn? : string;
	externalRecordingIdIn? : string;
	kSql? : string;
}


export class KalturaRecordingFilter extends KalturaFilter {

    statusIn : string;
	assetIdIn : string;
	externalRecordingIdIn : string;
	kSql : string;

    constructor(data? : KalturaRecordingFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRecordingFilter' },
				statusIn : { type : 's' },
				assetIdIn : { type : 's' },
				externalRecordingIdIn : { type : 's' },
				kSql : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRecordingFilter',KalturaRecordingFilter);
