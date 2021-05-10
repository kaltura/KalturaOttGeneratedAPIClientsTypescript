
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDiscountDetails } from './KalturaDiscountDetails';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DiscountDetailsAddActionArgs  extends KalturaRequestArgs {
    discountDetails : KalturaDiscountDetails;
}

/**
 * Build request payload for service 'discountDetails' action 'add'.
 *
 * Usage: Internal API !!! Insert new DiscountDetails for partner
 *
 * Server response type:         KalturaDiscountDetails
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DiscountDetailsAddAction extends KalturaRequest<KalturaDiscountDetails> {

    discountDetails : KalturaDiscountDetails;

    constructor(data : DiscountDetailsAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDiscountDetails', responseConstructor : KalturaDiscountDetails  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'discountdetails' },
				action : { type : 'c', default : 'add' },
				discountDetails : { type : 'o', subTypeConstructor : KalturaDiscountDetails, subType : 'KalturaDiscountDetails' }
            }
        );
        return result;
    }
}

