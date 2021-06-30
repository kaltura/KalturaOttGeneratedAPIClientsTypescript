
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSubscriptionInternal } from './KalturaSubscriptionInternal';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SubscriptionAddInternalActionArgs  extends KalturaRequestArgs {
    subscription : KalturaSubscriptionInternal;
}

/**
 * Build request payload for service 'subscription' action 'addInternal'.
 *
 * Usage: Internal API !!! Insert new subscription for partner
 *
 * Server response type:         KalturaSubscriptionInternal
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SubscriptionAddInternalAction extends KalturaRequest<KalturaSubscriptionInternal> {

    subscription : KalturaSubscriptionInternal;

    constructor(data : SubscriptionAddInternalActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSubscriptionInternal', responseConstructor : KalturaSubscriptionInternal  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'subscription' },
				action : { type : 'c', default : 'addInternal' },
				subscription : { type : 'o', subTypeConstructor : KalturaSubscriptionInternal, subType : 'KalturaSubscriptionInternal' }
            }
        );
        return result;
    }
}

