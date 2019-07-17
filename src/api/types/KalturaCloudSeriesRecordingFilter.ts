
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSeriesRecordingFilter, KalturaSeriesRecordingFilterArgs } from './KalturaSeriesRecordingFilter';

export interface KalturaCloudSeriesRecordingFilterArgs  extends KalturaSeriesRecordingFilterArgs {
    adapterData? : string;
}


export class KalturaCloudSeriesRecordingFilter extends KalturaSeriesRecordingFilter {

    adapterData : string;

    constructor(data? : KalturaCloudSeriesRecordingFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCloudSeriesRecordingFilter' },
				adapterData : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCloudSeriesRecordingFilter',KalturaCloudSeriesRecordingFilter);
