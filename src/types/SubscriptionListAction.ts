
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSubscriptionListResponse } from './KalturaSubscriptionListResponse';

import { KalturaSubscriptionFilter } from './KalturaSubscriptionFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SubscriptionListActionArgs  extends KalturaRequestArgs {
    filter : KalturaSubscriptionFilter;
}

/** 
* Returns a list of subscriptions requested by Subscription ID or file ID
**/
export class SubscriptionListAction extends KalturaRequest<KalturaSubscriptionListResponse> {

    filter : KalturaSubscriptionFilter;

    constructor(data : SubscriptionListActionArgs)
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
				filter : { type : 'o', subTypeConstructor : KalturaSubscriptionFilter, subType : 'KalturaSubscriptionFilter' }
            }
        );
        return result;
    }
}

