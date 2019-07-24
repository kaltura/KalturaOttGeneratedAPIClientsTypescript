
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCoupon } from './KalturaCoupon';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCouponListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaCoupon[];
}


export class KalturaCouponListResponse extends KalturaListResponse {

    objects : KalturaCoupon[];

    constructor(data? : KalturaCouponListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaCouponListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaCoupon, subType : 'KalturaCoupon' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCouponListResponse',KalturaCouponListResponse);
