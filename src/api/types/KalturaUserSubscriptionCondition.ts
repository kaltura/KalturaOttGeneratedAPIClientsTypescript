
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSubscriptionCondition, KalturaSubscriptionConditionArgs } from './KalturaSubscriptionCondition';

export interface KalturaUserSubscriptionConditionArgs  extends KalturaSubscriptionConditionArgs {
    
}


export class KalturaUserSubscriptionCondition extends KalturaSubscriptionCondition {

    

    constructor(data? : KalturaUserSubscriptionConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserSubscriptionCondition' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserSubscriptionCondition',KalturaUserSubscriptionCondition);
