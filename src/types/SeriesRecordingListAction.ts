
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSeriesRecordingListResponse } from './KalturaSeriesRecordingListResponse';

import { KalturaSeriesRecordingFilter } from './KalturaSeriesRecordingFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SeriesRecordingListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaSeriesRecordingFilter;
}

/**
 * Build request payload for service 'seriesRecording' action 'list'.
 *
 * Usage: Return a list of series recordings for the household with optional filter by status and KSQL
 *
 * Server response type:         KalturaSeriesRecordingListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SeriesRecordingListAction extends KalturaRequest<KalturaSeriesRecordingListResponse> {

    filter : KalturaSeriesRecordingFilter;

    constructor(data? : SeriesRecordingListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSeriesRecordingListResponse', responseConstructor : KalturaSeriesRecordingListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'seriesrecording' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaSeriesRecordingFilter, subType : 'KalturaSeriesRecordingFilter' }
            }
        );
        return result;
    }
}

