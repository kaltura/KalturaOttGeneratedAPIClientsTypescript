
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCoupon } from './KalturaCoupon';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SubscriptionValidateCouponActionArgs  extends KalturaRequestArgs {
    id : number;
	code : string;
}

/** 
* Returns information about a coupon for subscription
**/
export class SubscriptionValidateCouponAction extends KalturaRequest<KalturaCoupon> {

    id : number;
	code : string;

    constructor(data : SubscriptionValidateCouponActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCoupon', responseConstructor : KalturaCoupon  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'subscription' },
				action : { type : 'c', default : 'validateCoupon' },
				id : { type : 'n' },
				code : { type : 's' }
            }
        );
        return result;
    }
}

