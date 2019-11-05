
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdCouponDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'householdCoupon' action 'delete'.
 *
 * Usage: Remove coupon from household
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdCouponDeleteAction extends KalturaRequest<void> {

    id : string;

    constructor(data : HouseholdCouponDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdcoupon' },
				action : { type : 'c', default : 'delete' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

