
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaSeriesRecordingFilter, KalturaSeriesRecordingFilterArgs } from './KalturaSeriesRecordingFilter';

export interface KalturaCloudSeriesRecordingFilterArgs  extends KalturaSeriesRecordingFilterArgs {
    adapterData? : { [key : string] : KalturaStringValue};
}


export class KalturaCloudSeriesRecordingFilter extends KalturaSeriesRecordingFilter {

    adapterData : { [key : string] : KalturaStringValue};

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
				adapterData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCloudSeriesRecordingFilter',KalturaCloudSeriesRecordingFilter);
