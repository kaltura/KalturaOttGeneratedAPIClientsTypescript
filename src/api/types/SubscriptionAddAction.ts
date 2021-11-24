
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSubscription } from './KalturaSubscription';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SubscriptionAddActionArgs  extends KalturaRequestArgs {
    subscription : KalturaSubscription;
}

/**
 * Build request payload for service 'subscription' action 'add'.
 *
 * Usage: Insert new subscription for partner
 *
 * Server response type:         KalturaSubscription
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SubscriptionAddAction extends KalturaRequest<KalturaSubscription> {

    subscription : KalturaSubscription;

    constructor(data : SubscriptionAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				subscription : { type : 'o', subTypeConstructor : KalturaSubscription, subType : 'KalturaSubscription' }
            }
        );
        return result;
    }
}

