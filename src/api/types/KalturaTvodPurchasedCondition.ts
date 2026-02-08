
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConditionLevel } from './KalturaConditionLevel';
import { KalturaBaseSegmentCondition, KalturaBaseSegmentConditionArgs } from './KalturaBaseSegmentCondition';

export interface KalturaTvodPurchasedConditionArgs  extends KalturaBaseSegmentConditionArgs {
    level? : KalturaConditionLevel;
	ppvIdEquals? : number;
	mediaIdEquals? : number;
	days? : number;
}


export class KalturaTvodPurchasedCondition extends KalturaBaseSegmentCondition {

    level : KalturaConditionLevel;
	ppvIdEquals : number;
	mediaIdEquals : number;
	days : number;

    constructor(data? : KalturaTvodPurchasedConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTvodPurchasedCondition' },
				level : { type : 'es', subTypeConstructor : KalturaConditionLevel, subType : 'KalturaConditionLevel' },
				ppvIdEquals : { type : 'n' },
				mediaIdEquals : { type : 'n' },
				days : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTvodPurchasedCondition',KalturaTvodPurchasedCondition);
