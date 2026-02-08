
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConditionLevel } from './KalturaConditionLevel';
import { KalturaBaseSegmentCondition, KalturaBaseSegmentConditionArgs } from './KalturaBaseSegmentCondition';

export interface KalturaSubscriptionEntitledConditionArgs  extends KalturaBaseSegmentConditionArgs {
    level? : KalturaConditionLevel;
	subscriptionIdEquals? : number;
}


export class KalturaSubscriptionEntitledCondition extends KalturaBaseSegmentCondition {

    level : KalturaConditionLevel;
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
				level : { type : 'es', subTypeConstructor : KalturaConditionLevel, subType : 'KalturaConditionLevel' },
				subscriptionIdEquals : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionEntitledCondition',KalturaSubscriptionEntitledCondition);
