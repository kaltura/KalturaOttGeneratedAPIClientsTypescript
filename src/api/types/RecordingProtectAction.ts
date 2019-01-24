
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRecording } from './KalturaRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RecordingProtectActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'recording' action 'protect'.
 *
 * Usage: Protects an existing recording from the cleanup process for the defined protection period
 *
 * Server response type:         KalturaRecording
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RecordingProtectAction extends KalturaRequest<KalturaRecording> {

    id : number;

    constructor(data : RecordingProtectActionArgs)
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
				action : { type : 'c', default : 'protect' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

