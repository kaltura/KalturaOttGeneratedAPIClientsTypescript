
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRecording } from './KalturaRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RecordingUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	recording : KalturaRecording;
}

/**
 * Build request payload for service 'recording' action 'update'.
 *
 * Usage: Update an existing recording with is protected field
 *
 * Server response type:         KalturaRecording
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RecordingUpdateAction extends KalturaRequest<KalturaRecording> {

    id : number;
	recording : KalturaRecording;

    constructor(data : RecordingUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				recording : { type : 'o', subTypeConstructor : KalturaRecording, subType : 'KalturaRecording' }
            }
        );
        return result;
    }
}

