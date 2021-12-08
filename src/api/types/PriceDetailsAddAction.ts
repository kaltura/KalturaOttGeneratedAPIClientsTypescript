
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPriceDetails } from './KalturaPriceDetails';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PriceDetailsAddActionArgs  extends KalturaRequestArgs {
    priceDetails : KalturaPriceDetails;
}

/**
 * Build request payload for service 'priceDetails' action 'add'.
 *
 * Usage: Insert new PriceDetails for partner
 *
 * Server response type:         KalturaPriceDetails
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PriceDetailsAddAction extends KalturaRequest<KalturaPriceDetails> {

    priceDetails : KalturaPriceDetails;

    constructor(data : PriceDetailsAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPriceDetails', responseConstructor : KalturaPriceDetails  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'pricedetails' },
				action : { type : 'c', default : 'add' },
				priceDetails : { type : 'o', subTypeConstructor : KalturaPriceDetails, subType : 'KalturaPriceDetails' }
            }
        );
        return result;
    }
}

