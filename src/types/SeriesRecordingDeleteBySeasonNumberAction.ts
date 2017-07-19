
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSeriesRecording } from './KalturaSeriesRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SeriesRecordingDeleteBySeasonNumberActionArgs  extends KalturaRequestArgs {
    id : number;
	seasonNumber : number;
}

/** 
* Delete Season recording epgs that was recorded as part of series
**/
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

