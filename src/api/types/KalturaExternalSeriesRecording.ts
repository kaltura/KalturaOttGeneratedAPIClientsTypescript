
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaSeriesRecording, KalturaSeriesRecordingArgs } from './KalturaSeriesRecording';

export interface KalturaExternalSeriesRecordingArgs  extends KalturaSeriesRecordingArgs {
    metaData? : { [key : string] : KalturaStringValue};
}


export class KalturaExternalSeriesRecording extends KalturaSeriesRecording {

    metaData : { [key : string] : KalturaStringValue};

    constructor(data? : KalturaExternalSeriesRecordingArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExternalSeriesRecording' },
				metaData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExternalSeriesRecording',KalturaExternalSeriesRecording);
