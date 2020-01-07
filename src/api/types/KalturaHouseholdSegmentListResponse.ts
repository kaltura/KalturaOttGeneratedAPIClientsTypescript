
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHouseholdSegment } from './KalturaHouseholdSegment';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaHouseholdSegmentListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaHouseholdSegment[];
}


export class KalturaHouseholdSegmentListResponse extends KalturaListResponse {

    objects : KalturaHouseholdSegment[];

    constructor(data? : KalturaHouseholdSegmentListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaHouseholdSegmentListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaHouseholdSegment, subType : 'KalturaHouseholdSegment' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdSegmentListResponse',KalturaHouseholdSegmentListResponse);
