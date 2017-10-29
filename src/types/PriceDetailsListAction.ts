
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPriceDetailsListResponse } from './KalturaPriceDetailsListResponse';

import { KalturaPriceDetailsFilter } from './KalturaPriceDetailsFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PriceDetailsListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaPriceDetailsFilter;
}

/**
 * Build request payload for service 'priceDetails' action 'list'.
 *
 * Usage: Returns the list of available prices, can be filtered by price IDs
 *
 * Server response type:         KalturaPriceDetailsListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PriceDetailsListAction extends KalturaRequest<KalturaPriceDetailsListResponse> {

    filter : KalturaPriceDetailsFilter;

    constructor(data? : PriceDetailsListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPriceDetailsListResponse', responseConstructor : KalturaPriceDetailsListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'pricedetails' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaPriceDetailsFilter, subType : 'KalturaPriceDetailsFilter' }
            }
        );
        return result;
    }
}

