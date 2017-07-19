
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSeriesRecording } from './KalturaSeriesRecording';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SeriesRecordingDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete series recording(s). Delete series recording can be called recordings in
* any status
**/
export class SeriesRecordingDeleteAction extends KalturaRequest<KalturaSeriesRecording> {

    id : number;

    constructor(data : SeriesRecordingDeleteActionArgs)
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
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

