
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaRecording, KalturaRecordingArgs } from './KalturaRecording';

export interface KalturaExternalRecordingArgs  extends KalturaRecordingArgs {
    externalId? : string;
	metaData? : { [key : string] : KalturaStringValue};
}


export class KalturaExternalRecording extends KalturaRecording {

    externalId : string;
	metaData : { [key : string] : KalturaStringValue};

    constructor(data? : KalturaExternalRecordingArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExternalRecording' },
				externalId : { type : 's' },
				metaData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExternalRecording',KalturaExternalRecording);
