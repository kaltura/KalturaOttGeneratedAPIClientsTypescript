
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSubscriptionSet } from './KalturaSubscriptionSet';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SubscriptionSetGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Get the subscriptionSet according to the Identifier
**/
export class SubscriptionSetGetAction extends KalturaRequest<KalturaSubscriptionSet> {

    id : number;

    constructor(data : SubscriptionSetGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

