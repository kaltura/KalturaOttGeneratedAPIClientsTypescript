
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCoupon } from './KalturaCoupon';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CouponGetActionArgs  extends KalturaRequestArgs {
    code : string;
}

/**
 * Build request payload for service 'coupon' action 'get'.
 *
 * Usage: Returns information about a coupon
 *
 * Server response type:         KalturaCoupon
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CouponGetAction extends KalturaRequest<KalturaCoupon> {

    code : string;

    constructor(data : CouponGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCoupon', responseConstructor : KalturaCoupon  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'coupon' },
				action : { type : 'c', default : 'get' },
				code : { type : 's' }
            }
        );
        return result;
    }
}

