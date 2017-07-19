
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSubscriptionSet } from './KalturaSubscriptionSet';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SubscriptionSetAddActionArgs  extends KalturaRequestArgs {
    subscriptionSet : KalturaSubscriptionSet;
}

/** 
* Add a new subscriptionSet
**/
export class SubscriptionSetAddAction extends KalturaRequest<KalturaSubscriptionSet> {

    subscriptionSet : KalturaSubscriptionSet;

    constructor(data : SubscriptionSetAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSubscriptionSet', responseConstructor : KalturaSubscriptionSet  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'subscriptionset' },
				action : { type : 'c', default : 'add' },
				subscriptionSet : { type : 'o', subTypeConstructor : KalturaSubscriptionSet, subType : 'KalturaSubscriptionSet' }
            }
        );
        return result;
    }
}

