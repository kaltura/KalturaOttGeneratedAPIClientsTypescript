
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRecording, KalturaRecordingArgs } from './KalturaRecording';

export interface KalturaImmediateRecordingArgs  extends KalturaRecordingArgs {
    endPadding? : number;
	absoluteStart? : number;
}


export class KalturaImmediateRecording extends KalturaRecording {

    endPadding : number;
	absoluteStart : number;

    constructor(data? : KalturaImmediateRecordingArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaImmediateRecording' },
				endPadding : { type : 'n' },
				absoluteStart : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaImmediateRecording',KalturaImmediateRecording);
