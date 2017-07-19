
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSeriesRecording } from './KalturaSeriesRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SeriesRecordingCancelByEpgIdActionArgs  extends KalturaRequestArgs {
    id : number;
	epgId : number;
}

/** 
* Cancel EPG recording that was recorded as part of series
**/
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

