
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntitlementApplyCouponActionArgs  extends KalturaRequestArgs {
    purchaseId : number;
	couponCode : string;
}

/**
 * Build request payload for service 'entitlement' action 'applyCoupon'.
 *
 * Usage: Apply new coupon for existing subscription
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntitlementApplyCouponAction extends KalturaRequest<void> {

    purchaseId : number;
	couponCode : string;

    constructor(data : EntitlementApplyCouponActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'entitlement' },
				action : { type : 'c', default : 'applyCoupon' },
				purchaseId : { type : 'n' },
				couponCode : { type : 's' }
            }
        );
        return result;
    }
}

