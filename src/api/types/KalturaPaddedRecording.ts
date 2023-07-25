
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRecording, KalturaRecordingArgs } from './KalturaRecording';

export interface KalturaPaddedRecordingArgs  extends KalturaRecordingArgs {
    startPadding? : number;
	endPadding? : number;
}


export class KalturaPaddedRecording extends KalturaRecording {

    startPadding : number;
	endPadding : number;
	readonly startPaddingIsPersonal : boolean;
	readonly endPaddingIsPersonal : boolean;

    constructor(data? : KalturaPaddedRecordingArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPaddedRecording' },
				startPadding : { type : 'n' },
				endPadding : { type : 'n' },
				startPaddingIsPersonal : { type : 'b', readOnly : true },
				endPaddingIsPersonal : { type : 'b', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPaddedRecording',KalturaPaddedRecording);
