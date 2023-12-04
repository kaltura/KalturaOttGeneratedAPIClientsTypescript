
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCouponFilesLinks } from './KalturaCouponFilesLinks';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CouponGetFilesLinksActionArgs  extends KalturaRequestArgs {
    couponsGroupId : number;
}

/**
 * Build request payload for service 'coupon' action 'getFilesLinks'.
 *
 * Usage: get all coupon codes of a specific couponGroup
 *
 * Server response type:         KalturaCouponFilesLinks
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CouponGetFilesLinksAction extends KalturaRequest<KalturaCouponFilesLinks> {

    couponsGroupId : number;

    constructor(data : CouponGetFilesLinksActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCouponFilesLinks', responseConstructor : KalturaCouponFilesLinks  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'coupon' },
				action : { type : 'c', default : 'getFilesLinks' },
				couponsGroupId : { type : 'n' }
            }
        );
        return result;
    }
}

