
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSeriesRecording } from './KalturaSeriesRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SeriesRecordingCancelActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Cancel a previously requested series recording. Cancel series recording can be
* called for recording in status Scheduled or Recording Only
**/
export class SeriesRecordingCancelAction extends KalturaRequest<KalturaSeriesRecording> {

    id : number;

    constructor(data : SeriesRecordingCancelActionArgs)
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
				action : { type : 'c', default : 'cancel' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

