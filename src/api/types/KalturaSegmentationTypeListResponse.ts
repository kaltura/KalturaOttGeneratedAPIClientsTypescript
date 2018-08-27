
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSegmentationType } from './KalturaSegmentationType';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaSegmentationTypeListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaSegmentationType[];
}


export class KalturaSegmentationTypeListResponse extends KalturaListResponse {

    objects : KalturaSegmentationType[];

    constructor(data? : KalturaSegmentationTypeListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaSegmentationTypeListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaSegmentationType, subType : 'KalturaSegmentationType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentationTypeListResponse',KalturaSegmentationTypeListResponse);
