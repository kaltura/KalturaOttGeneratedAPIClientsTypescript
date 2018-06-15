
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPricePlan } from './KalturaPricePlan';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PricePlanUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	pricePlan : KalturaPricePlan;
}

/**
 * Build request payload for service 'pricePlan' action 'update'.
 *
 * Usage: Updates a price plan
 *
 * Server response type:         KalturaPricePlan
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PricePlanUpdateAction extends KalturaRequest<KalturaPricePlan> {

    id : number;
	pricePlan : KalturaPricePlan;

    constructor(data : PricePlanUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				pricePlan : { type : 'o', subTypeConstructor : KalturaPricePlan, subType : 'KalturaPricePlan' }
            }
        );
        return result;
    }
}

