
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSubscriptionListResponse } from './KalturaSubscriptionListResponse';

import { KalturaSubscriptionFilter } from './KalturaSubscriptionFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SubscriptionListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaSubscriptionFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'subscription' action 'list'.
 *
 * Usage: Returns a list of subscriptions requested by Subscription ID or file ID
 *
 * Server response type:         KalturaSubscriptionListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SubscriptionListAction extends KalturaRequest<KalturaSubscriptionListResponse> {

    filter : KalturaSubscriptionFilter;
	pager : KalturaFilterPager;

    constructor(data? : SubscriptionListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSubscriptionListResponse', responseConstructor : KalturaSubscriptionListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'subscription' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaSubscriptionFilter, subType : 'KalturaSubscriptionFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

