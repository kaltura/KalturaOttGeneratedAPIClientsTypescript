
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSeriesRecording } from './KalturaSeriesRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SeriesRecordingCancelByEpgIdActionArgs  extends KalturaRequestArgs {
    id : number;
	epgId : number;
}

/**
 * Build request payload for service 'seriesRecording' action 'cancelByEpgId'.
 *
 * Usage: Cancel EPG recording that was recorded as part of series
 *
 * Server response type:         KalturaSeriesRecording
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SeriesRecordingCancelByEpgIdAction extends KalturaRequest<KalturaSeriesRecording> {

    id : number;
	epgId : number;

    constructor(data : SeriesRecordingCancelByEpgIdActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSeriesRecording', responseConstructor : KalturaSeriesRecording  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'seriesrecording' },
				action : { type : 'c', default : 'cancelByEpgId' },
				id : { type : 'n' },
				epgId : { type : 'n' }
            }
        );
        return result;
    }
}

