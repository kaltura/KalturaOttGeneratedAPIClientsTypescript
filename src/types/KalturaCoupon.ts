
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCouponsGroup } from './KalturaCouponsGroup';
import { KalturaCouponStatus } from './KalturaCouponStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCouponArgs  extends KalturaObjectBaseArgs {
    
}

/** 
* Coupon details container
**/
export class KalturaCoupon extends KalturaObjectBase {

    readonly couponsGroup : KalturaCouponsGroup;
	readonly status : KalturaCouponStatus;

    constructor(data? : KalturaCouponArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCoupon' },
				couponsGroup : { type : 'o', readOnly : true, subTypeConstructor : KalturaCouponsGroup, subType : 'KalturaCouponsGroup' },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaCouponStatus, subType : 'KalturaCouponStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCoupon',KalturaCoupon);
