
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSubscription } from './KalturaSubscription';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SubscriptionUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	subscription : KalturaSubscription;
}

/**
 * Build request payload for service 'subscription' action 'update'.
 *
 * Usage: Update Subscription
 *
 * Server response type:         KalturaSubscription
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SubscriptionUpdateAction extends KalturaRequest<KalturaSubscription> {

    id : number;
	subscription : KalturaSubscription;

    constructor(data : SubscriptionUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSubscription', responseConstructor : KalturaSubscription  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'subscription' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				subscription : { type : 'o', subTypeConstructor : KalturaSubscription, subType : 'KalturaSubscription' }
            }
        );
        return result;
    }
}

