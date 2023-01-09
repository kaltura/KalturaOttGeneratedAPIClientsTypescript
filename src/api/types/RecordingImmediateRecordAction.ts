
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaImmediateRecording } from './KalturaImmediateRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RecordingImmediateRecordActionArgs  extends KalturaRequestArgs {
    assetId : number;
	epgChannelId : number;
	endPadding : number;
}

/**
 * Build request payload for service 'recording' action 'immediateRecord'.
 *
 * Usage: Immediate Record
 *
 * Server response type:         KalturaImmediateRecording
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RecordingImmediateRecordAction extends KalturaRequest<KalturaImmediateRecording> {

    assetId : number;
	epgChannelId : number;
	endPadding : number;

    constructor(data : RecordingImmediateRecordActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaImmediateRecording', responseConstructor : KalturaImmediateRecording  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'recording' },
				action : { type : 'c', default : 'immediateRecord' },
				assetId : { type : 'n' },
				epgChannelId : { type : 'n' },
				endPadding : { type : 'n' }
            }
        );
        return result;
    }
}

