
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRecording } from './KalturaRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RecordingAddActionArgs  extends KalturaRequestArgs {
    recording : KalturaRecording;
}

/** 
* Issue a record request for a program
**/
export class RecordingAddAction extends KalturaRequest<KalturaRecording> {

    recording : KalturaRecording;

    constructor(data : RecordingAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRecording', responseConstructor : KalturaRecording  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'recording' },
				action : { type : 'c', default : 'add' },
				recording : { type : 'o', subTypeConstructor : KalturaRecording, subType : 'KalturaRecording' }
            }
        );
        return result;
    }
}

