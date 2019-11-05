
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdCouponListResponse } from './KalturaHouseholdCouponListResponse';

import { KalturaHouseholdCouponFilter } from './KalturaHouseholdCouponFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdCouponListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaHouseholdCouponFilter;
}

/**
 * Build request payload for service 'householdCoupon' action 'list'.
 *
 * Usage: Gets all HouseholdCoupon items for a household
 *
 * Server response type:         KalturaHouseholdCouponListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdCouponListAction extends KalturaRequest<KalturaHouseholdCouponListResponse> {

    filter : KalturaHouseholdCouponFilter;

    constructor(data? : HouseholdCouponListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHouseholdCouponListResponse', responseConstructor : KalturaHouseholdCouponListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdcoupon' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaHouseholdCouponFilter, subType : 'KalturaHouseholdCouponFilter' }
            }
        );
        return result;
    }
}

