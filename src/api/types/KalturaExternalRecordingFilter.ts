
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaRecordingFilter, KalturaRecordingFilterArgs } from './KalturaRecordingFilter';

export interface KalturaExternalRecordingFilterArgs  extends KalturaRecordingFilterArgs {
    metaData? : { [key : string] : KalturaStringValue};
}


export class KalturaExternalRecordingFilter extends KalturaRecordingFilter {

    metaData : { [key : string] : KalturaStringValue};

    constructor(data? : KalturaExternalRecordingFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExternalRecordingFilter' },
				metaData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExternalRecordingFilter',KalturaExternalRecordingFilter);
