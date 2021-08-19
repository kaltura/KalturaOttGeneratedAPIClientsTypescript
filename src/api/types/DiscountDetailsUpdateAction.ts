
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDiscountDetails } from './KalturaDiscountDetails';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DiscountDetailsUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	discountDetails : KalturaDiscountDetails;
}

/**
 * Build request payload for service 'discountDetails' action 'update'.
 *
 * Usage: Update discount details
 *
 * Server response type:         KalturaDiscountDetails
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DiscountDetailsUpdateAction extends KalturaRequest<KalturaDiscountDetails> {

    id : number;
	discountDetails : KalturaDiscountDetails;

    constructor(data : DiscountDetailsUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				discountDetails : { type : 'o', subTypeConstructor : KalturaDiscountDetails, subType : 'KalturaDiscountDetails' }
            }
        );
        return result;
    }
}

