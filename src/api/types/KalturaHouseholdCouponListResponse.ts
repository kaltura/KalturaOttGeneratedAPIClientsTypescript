
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaHouseholdCoupon } from './KalturaHouseholdCoupon';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaHouseholdCouponListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaHouseholdCoupon[];
}


export class KalturaHouseholdCouponListResponse extends KalturaListResponse {

    objects : KalturaHouseholdCoupon[];

    constructor(data? : KalturaHouseholdCouponListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaHouseholdCouponListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaHouseholdCoupon, subType : 'KalturaHouseholdCoupon' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHouseholdCouponListResponse',KalturaHouseholdCouponListResponse);
