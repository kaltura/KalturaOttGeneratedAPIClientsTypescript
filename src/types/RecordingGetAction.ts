
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRecording } from './KalturaRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RecordingGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Returns recording object by internal identifier
**/
export class RecordingGetAction extends KalturaRequest<KalturaRecording> {

    id : number;

    constructor(data : RecordingGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

