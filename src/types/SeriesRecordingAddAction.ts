
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSeriesRecording } from './KalturaSeriesRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SeriesRecordingAddActionArgs  extends KalturaRequestArgs {
    recording : KalturaSeriesRecording;
}

/** 
* Issue a record request for a complete season or series
**/
export class SeriesRecordingAddAction extends KalturaRequest<KalturaSeriesRecording> {

    recording : KalturaSeriesRecording;

    constructor(data : SeriesRecordingAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				recording : { type : 'o', subTypeConstructor : KalturaSeriesRecording, subType : 'KalturaSeriesRecording' }
            }
        );
        return result;
    }
}

