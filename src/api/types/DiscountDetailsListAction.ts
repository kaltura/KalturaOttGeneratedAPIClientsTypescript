
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDiscountDetailsListResponse } from './KalturaDiscountDetailsListResponse';

import { KalturaDiscountDetailsFilter } from './KalturaDiscountDetailsFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DiscountDetailsListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDiscountDetailsFilter;
}

/**
 * Build request payload for service 'discountDetails' action 'list'.
 *
 * Usage: Returns the list of available discounts details, can be filtered by discount codes
 *
 * Server response type:         KalturaDiscountDetailsListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DiscountDetailsListAction extends KalturaRequest<KalturaDiscountDetailsListResponse> {

    filter : KalturaDiscountDetailsFilter;

    constructor(data? : DiscountDetailsListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDiscountDetailsListResponse', responseConstructor : KalturaDiscountDetailsListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'discountdetails' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaDiscountDetailsFilter, subType : 'KalturaDiscountDetailsFilter' }
            }
        );
        return result;
    }
}

