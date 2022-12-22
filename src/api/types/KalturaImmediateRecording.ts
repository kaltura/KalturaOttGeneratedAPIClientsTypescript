
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRecording, KalturaRecordingArgs } from './KalturaRecording';

export interface KalturaImmediateRecordingArgs  extends KalturaRecordingArgs {
    
}


export class KalturaImmediateRecording extends KalturaRecording {

    readonly endPadding : number;
	readonly absoluteStart : number;
	readonly absoluteEnd : number;

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
				endPadding : { type : 'n', readOnly : true },
				absoluteStart : { type : 'n', readOnly : true },
				absoluteEnd : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaImmediateRecording',KalturaImmediateRecording);
