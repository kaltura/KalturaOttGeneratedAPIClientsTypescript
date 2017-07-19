
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSeriesRecording } from './KalturaSeriesRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SeriesRecordingCancelBySeasonNumberActionArgs  extends KalturaRequestArgs {
    id : number;
	seasonNumber : number;
}

/** 
* Cancel Season recording epgs that was recorded as part of series
**/
export class SeriesRecordingCancelBySeasonNumberAction extends KalturaRequest<KalturaSeriesRecording> {

    id : number;
	seasonNumber : number;

    constructor(data : SeriesRecordingCancelBySeasonNumberActionArgs)
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
				action : { type : 'c', default : 'cancelBySeasonNumber' },
				id : { type : 'n' },
				seasonNumber : { type : 'n' }
            }
        );
        return result;
    }
}

