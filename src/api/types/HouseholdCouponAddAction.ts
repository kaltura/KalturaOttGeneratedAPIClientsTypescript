
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdCoupon } from './KalturaHouseholdCoupon';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdCouponAddActionArgs  extends KalturaRequestArgs {
    objectToAdd : KalturaHouseholdCoupon;
}

/**
 * Build request payload for service 'householdCoupon' action 'add'.
 *
 * Usage: householdCoupon add
 *
 * Server response type:         KalturaHouseholdCoupon
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdCouponAddAction extends KalturaRequest<KalturaHouseholdCoupon> {

    objectToAdd : KalturaHouseholdCoupon;

    constructor(data : HouseholdCouponAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHouseholdCoupon', responseConstructor : KalturaHouseholdCoupon  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdcoupon' },
				action : { type : 'c', default : 'add' },
				objectToAdd : { type : 'o', subTypeConstructor : KalturaHouseholdCoupon, subType : 'KalturaHouseholdCoupon' }
            }
        );
        return result;
    }
}

