
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSubscription } from './KalturaSubscription';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaSubscriptionListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaSubscription[];
}

/** 
* Subscriptions list
**/
export class KalturaSubscriptionListResponse extends KalturaListResponse {

    objects : KalturaSubscription[];

    constructor(data? : KalturaSubscriptionListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaSubscription, subType : 'KalturaSubscription' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionListResponse',KalturaSubscriptionListResponse);
