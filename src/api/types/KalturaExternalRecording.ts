
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRecording, KalturaRecordingArgs } from './KalturaRecording';

export interface KalturaExternalRecordingArgs  extends KalturaRecordingArgs {
    externalId? : string;
}


export class KalturaExternalRecording extends KalturaRecording {

    externalId : string;

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
				externalId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExternalRecording',KalturaExternalRecording);
