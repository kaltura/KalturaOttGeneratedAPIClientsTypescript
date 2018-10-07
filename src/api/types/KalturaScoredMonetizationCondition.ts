
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMonetizationCondition } from './KalturaMonetizationCondition';
import { KalturaBaseSegmentCondition, KalturaBaseSegmentConditionArgs } from './KalturaBaseSegmentCondition';

export interface KalturaScoredMonetizationConditionArgs  extends KalturaBaseSegmentConditionArgs {
    minScore? : number;
	maxScore? : number;
	days? : number;
	actions? : KalturaMonetizationCondition[];
}


export class KalturaScoredMonetizationCondition extends KalturaBaseSegmentCondition {

    minScore : number;
	maxScore : number;
	days : number;
	actions : KalturaMonetizationCondition[];

    constructor(data? : KalturaScoredMonetizationConditionArgs)
    {
        super(data);
        if (typeof this.actions === 'undefined') this.actions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScoredMonetizationCondition' },
				minScore : { type : 'n' },
				maxScore : { type : 'n' },
				days : { type : 'n' },
				actions : { type : 'a', subTypeConstructor : KalturaMonetizationCondition, subType : 'KalturaMonetizationCondition' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScoredMonetizationCondition',KalturaScoredMonetizationCondition);
