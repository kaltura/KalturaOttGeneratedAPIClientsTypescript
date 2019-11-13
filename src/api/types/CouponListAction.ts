
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCouponListResponse } from './KalturaCouponListResponse';

import { KalturaCouponFilter } from './KalturaCouponFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CouponListActionArgs  extends KalturaRequestArgs {
    filter : KalturaCouponFilter;
}

/**
 * Build request payload for service 'coupon' action 'list'.
 *
 * Usage: Lists coupon codes
 *
 * Server response type:         KalturaCouponListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CouponListAction extends KalturaRequest<KalturaCouponListResponse> {

    filter : KalturaCouponFilter;

    constructor(data : CouponListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCouponListResponse', responseConstructor : KalturaCouponListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'coupon' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaCouponFilter, subType : 'KalturaCouponFilter' }
            }
        );
        return result;
    }
}

