
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSeriesRecording } from './KalturaSeriesRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SeriesRecordingRebookCanceledByEpgIdActionArgs  extends KalturaRequestArgs {
    epgId : number;
}

/**
 * Build request payload for service 'seriesRecording' action 'rebookCanceledByEpgId'.
 *
 * Usage: Enable EPG recording that was canceled as part of series
 *
 * Server response type:         KalturaSeriesRecording
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SeriesRecordingRebookCanceledByEpgIdAction extends KalturaRequest<KalturaSeriesRecording> {

    epgId : number;

    constructor(data : SeriesRecordingRebookCanceledByEpgIdActionArgs)
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
				action : { type : 'c', default : 'rebookCanceledByEpgId' },
				epgId : { type : 'n' }
            }
        );
        return result;
    }
}

