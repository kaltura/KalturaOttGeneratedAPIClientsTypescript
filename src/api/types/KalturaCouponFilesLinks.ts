
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCouponFilesLinksArgs  extends KalturaListResponseArgs {
    objects? : KalturaStringValue[];
}


export class KalturaCouponFilesLinks extends KalturaListResponse {

    objects : KalturaStringValue[];

    constructor(data? : KalturaCouponFilesLinksArgs)
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
                objectType : { type : 'c', default : 'KalturaCouponFilesLinks' },
				objects : { type : 'a', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCouponFilesLinks',KalturaCouponFilesLinks);
