
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSeriesRecording } from './KalturaSeriesRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SeriesRecordingDeleteBySeasonNumberActionArgs  extends KalturaRequestArgs {
    id : number;
	seasonNumber : number;
}

/**
 * Build request payload for service 'seriesRecording' action 'deleteBySeasonNumber'.
 *
 * Usage: Delete Season recording epgs that was recorded as part of series
 *
 * Server response type:         KalturaSeriesRecording
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SeriesRecordingDeleteBySeasonNumberAction extends KalturaRequest<KalturaSeriesRecording> {

    id : number;
	seasonNumber : number;

    constructor(data : SeriesRecordingDeleteBySeasonNumberActionArgs)
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
				action : { type : 'c', default : 'deleteBySeasonNumber' },
				id : { type : 'n' },
				seasonNumber : { type : 'n' }
            }
        );
        return result;
    }
}

