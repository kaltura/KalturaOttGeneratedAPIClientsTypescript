
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPricePlan } from './KalturaPricePlan';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PricePlanAddActionArgs  extends KalturaRequestArgs {
    pricePlan : KalturaPricePlan;
}

/**
 * Build request payload for service 'pricePlan' action 'add'.
 *
 * Usage: Internal API !!!  Insert new PriceDetails for partner
 *
 * Server response type:         KalturaPricePlan
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PricePlanAddAction extends KalturaRequest<KalturaPricePlan> {

    pricePlan : KalturaPricePlan;

    constructor(data : PricePlanAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPricePlan', responseConstructor : KalturaPricePlan  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'priceplan' },
				action : { type : 'c', default : 'add' },
				pricePlan : { type : 'o', subTypeConstructor : KalturaPricePlan, subType : 'KalturaPricePlan' }
            }
        );
        return result;
    }
}

