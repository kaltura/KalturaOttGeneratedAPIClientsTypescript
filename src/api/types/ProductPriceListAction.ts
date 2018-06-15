
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaProductPriceListResponse } from './KalturaProductPriceListResponse';

import { KalturaProductPriceFilter } from './KalturaProductPriceFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ProductPriceListActionArgs  extends KalturaRequestArgs {
    filter : KalturaProductPriceFilter;
}

/**
 * Build request payload for service 'productPrice' action 'list'.
 *
 * Usage: Returns a price and a purchase status for each subscription or/and media file, for a given user (if passed) and with the consideration of a coupon code (if passed)
 *
 * Server response type:         KalturaProductPriceListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ProductPriceListAction extends KalturaRequest<KalturaProductPriceListResponse> {

    filter : KalturaProductPriceFilter;

    constructor(data : ProductPriceListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaProductPriceListResponse', responseConstructor : KalturaProductPriceListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'productprice' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaProductPriceFilter, subType : 'KalturaProductPriceFilter' }
            }
        );
        return result;
    }
}

