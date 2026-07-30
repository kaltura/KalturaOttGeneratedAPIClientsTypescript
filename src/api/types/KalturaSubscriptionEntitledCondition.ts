
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseSegmentCondition, KalturaBaseSegmentConditionArgs } from './KalturaBaseSegmentCondition';

export interface KalturaSubscriptionEntitledConditionArgs  extends KalturaBaseSegmentConditionArgs {
    subscriptionIdEquals? : number;
}


export class KalturaSubscriptionEntitledCondition extends KalturaBaseSegmentCondition {

    subscriptionIdEquals : number;

    constructor(data? : KalturaSubscriptionEntitledConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionEntitledCondition' },
				subscriptionIdEquals : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionEntitledCondition',KalturaSubscriptionEntitledCondition);
