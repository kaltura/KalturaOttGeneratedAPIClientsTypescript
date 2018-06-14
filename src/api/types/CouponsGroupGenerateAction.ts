
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringValueArray } from './KalturaStringValueArray';

import { KalturaCouponGenerationOptions } from './KalturaCouponGenerationOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CouponsGroupGenerateActionArgs  extends KalturaRequestArgs {
    id : number;
	couponGenerationOptions : KalturaCouponGenerationOptions;
}

/**
 * Build request payload for service 'couponsGroup' action 'generate'.
 *
 * Usage: Generate a coupon
 *
 * Server response type:         KalturaStringValueArray
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CouponsGroupGenerateAction extends KalturaRequest<KalturaStringValueArray> {

    id : number;
	couponGenerationOptions : KalturaCouponGenerationOptions;

    constructor(data : CouponsGroupGenerateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaStringValueArray', responseConstructor : KalturaStringValueArray  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'couponsgroup' },
				action : { type : 'c', default : 'generate' },
				id : { type : 'n' },
				couponGenerationOptions : { type : 'o', subTypeConstructor : KalturaCouponGenerationOptions, subType : 'KalturaCouponGenerationOptions' }
            }
        );
        return result;
    }
}

