
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaExternalRecordingFilter, KalturaExternalRecordingFilterArgs } from './KalturaExternalRecordingFilter';

export interface KalturaCloudRecordingFilterArgs  extends KalturaExternalRecordingFilterArgs {
    adapterData? : { [key : string] : KalturaStringValue};
}


export class KalturaCloudRecordingFilter extends KalturaExternalRecordingFilter {

    adapterData : { [key : string] : KalturaStringValue};

    constructor(data? : KalturaCloudRecordingFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCloudRecordingFilter' },
				adapterData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCloudRecordingFilter',KalturaCloudRecordingFilter);
