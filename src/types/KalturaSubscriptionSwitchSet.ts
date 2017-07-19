
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSubscriptionSet, KalturaSubscriptionSetArgs } from './KalturaSubscriptionSet';

export interface KalturaSubscriptionSwitchSetArgs  extends KalturaSubscriptionSetArgs {
    
}

/** 
* Subscription details
**/
export class KalturaSubscriptionSwitchSet extends KalturaSubscriptionSet {

    

    constructor(data? : KalturaSubscriptionSwitchSetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionSwitchSet' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionSwitchSet',KalturaSubscriptionSwitchSet);
