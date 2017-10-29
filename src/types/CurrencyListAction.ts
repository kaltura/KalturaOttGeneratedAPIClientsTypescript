
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCurrencyListResponse } from './KalturaCurrencyListResponse';

import { KalturaCurrencyFilter } from './KalturaCurrencyFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CurrencyListActionArgs  extends KalturaRequestArgs {
    filter : KalturaCurrencyFilter;
}

/**
 * Build request payload for service 'currency' action 'list'.
 *
 * Usage: Get the list of currencies for the partner with option to filter by currency codes
 *
 * Server response type:         KalturaCurrencyListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CurrencyListAction extends KalturaRequest<KalturaCurrencyListResponse> {

    filter : KalturaCurrencyFilter;

    constructor(data : CurrencyListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCurrencyListResponse', responseConstructor : KalturaCurrencyListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'currency' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaCurrencyFilter, subType : 'KalturaCurrencyFilter' }
            }
        );
        return result;
    }
}

