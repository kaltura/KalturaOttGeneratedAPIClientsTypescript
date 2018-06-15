
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRecording } from './KalturaRecording';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaRecordingListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaRecording[];
}


export class KalturaRecordingListResponse extends KalturaListResponse {

    objects : KalturaRecording[];

    constructor(data? : KalturaRecordingListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaRecordingListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaRecording, subType : 'KalturaRecording' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRecordingListResponse',KalturaRecordingListResponse);
