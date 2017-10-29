
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRecording } from './KalturaRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RecordingCancelActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'recording' action 'cancel'.
 *
 * Usage: Cancel a previously requested recording. Cancel recording can be called for recording in status Scheduled or Recording Only
 *
 * Server response type:         KalturaRecording
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RecordingCancelAction extends KalturaRequest<KalturaRecording> {

    id : number;

    constructor(data : RecordingCancelActionArgs)
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
				action : { type : 'c', default : 'cancel' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

