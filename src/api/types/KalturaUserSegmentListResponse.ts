
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserSegment } from './KalturaUserSegment';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaUserSegmentListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaUserSegment[];
}


export class KalturaUserSegmentListResponse extends KalturaListResponse {

    objects : KalturaUserSegment[];

    constructor(data? : KalturaUserSegmentListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaUserSegmentListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaUserSegment, subType : 'KalturaUserSegment' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserSegmentListResponse',KalturaUserSegmentListResponse);
