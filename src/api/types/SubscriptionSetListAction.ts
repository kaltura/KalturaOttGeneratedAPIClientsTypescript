
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSubscriptionSetListResponse } from './KalturaSubscriptionSetListResponse';

import { KalturaSubscriptionSetFilter } from './KalturaSubscriptionSetFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SubscriptionSetListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaSubscriptionSetFilter;
}

/**
 * Build request payload for service 'subscriptionSet' action 'list'.
 *
 * Usage: Returns a list of subscriptionSets requested by ids or subscription ids
 *
 * Server response type:         KalturaSubscriptionSetListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SubscriptionSetListAction extends KalturaRequest<KalturaSubscriptionSetListResponse> {

    filter : KalturaSubscriptionSetFilter;

    constructor(data? : SubscriptionSetListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSubscriptionSetListResponse', responseConstructor : KalturaSubscriptionSetListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'subscriptionset' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaSubscriptionSetFilter, subType : 'KalturaSubscriptionSetFilter' }
            }
        );
        return result;
    }
}

