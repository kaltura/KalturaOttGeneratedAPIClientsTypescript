
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCoupon } from './KalturaCoupon';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SubscriptionValidateCouponActionArgs  extends KalturaRequestArgs {
    id : number;
	code : string;
}

/**
 * Build request payload for service 'subscription' action 'validateCoupon'.
 *
 * Usage: Returns information about a coupon for subscription
 *
 * Server response type:         KalturaCoupon
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
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

