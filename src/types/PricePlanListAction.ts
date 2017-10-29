
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPricePlanListResponse } from './KalturaPricePlanListResponse';

import { KalturaPricePlanFilter } from './KalturaPricePlanFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PricePlanListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaPricePlanFilter;
}

/**
 * Build request payload for service 'pricePlan' action 'list'.
 *
 * Usage: Returns a list of price plans by IDs
 *
 * Server response type:         KalturaPricePlanListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PricePlanListAction extends KalturaRequest<KalturaPricePlanListResponse> {

    filter : KalturaPricePlanFilter;

    constructor(data? : PricePlanListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPricePlanListResponse', responseConstructor : KalturaPricePlanListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'priceplan' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaPricePlanFilter, subType : 'KalturaPricePlanFilter' }
            }
        );
        return result;
    }
}

