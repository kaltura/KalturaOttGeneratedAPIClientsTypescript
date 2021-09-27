
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPriceDetails } from './KalturaPriceDetails';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PriceDetailsUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	priceDetails : KalturaPriceDetails;
}

/**
 * Build request payload for service 'priceDetails' action 'update'.
 *
 * Usage: update existing PriceDetails
 *
 * Server response type:         KalturaPriceDetails
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PriceDetailsUpdateAction extends KalturaRequest<KalturaPriceDetails> {

    id : number;
	priceDetails : KalturaPriceDetails;

    constructor(data : PriceDetailsUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				priceDetails : { type : 'o', subTypeConstructor : KalturaPriceDetails, subType : 'KalturaPriceDetails' }
            }
        );
        return result;
    }
}

