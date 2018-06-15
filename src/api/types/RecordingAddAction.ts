
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRecording } from './KalturaRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RecordingAddActionArgs  extends KalturaRequestArgs {
    recording : KalturaRecording;
}

/**
 * Build request payload for service 'recording' action 'add'.
 *
 * Usage: Issue a record request for a program
 *
 * Server response type:         KalturaRecording
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
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

