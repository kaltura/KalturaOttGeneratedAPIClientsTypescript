
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRecording } from './KalturaRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RecordingDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete one or more user recording(s). Delete recording can be called only for
* recordings in status Recorded
**/
export class RecordingDeleteAction extends KalturaRequest<KalturaRecording> {

    id : number;

    constructor(data : RecordingDeleteActionArgs)
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
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

