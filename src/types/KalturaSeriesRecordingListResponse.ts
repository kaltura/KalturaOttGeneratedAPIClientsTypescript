
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSeriesRecording } from './KalturaSeriesRecording';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaSeriesRecordingListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaSeriesRecording[];
}


export class KalturaSeriesRecordingListResponse extends KalturaListResponse {

    objects : KalturaSeriesRecording[];

    constructor(data? : KalturaSeriesRecordingListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSeriesRecordingListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaSeriesRecording, subType : 'KalturaSeriesRecording' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSeriesRecordingListResponse',KalturaSeriesRecordingListResponse);
