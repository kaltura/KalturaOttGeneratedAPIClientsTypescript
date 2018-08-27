
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMonetizationCondition } from './KalturaMonetizationCondition';
import { KalturaBaseSegmentCondition, KalturaBaseSegmentConditionArgs } from './KalturaBaseSegmentCondition';

export interface KalturaScoredMonetizationConditionArgs  extends KalturaBaseSegmentConditionArgs {
    score? : number;
	actions? : KalturaMonetizationCondition[];
}


export class KalturaScoredMonetizationCondition extends KalturaBaseSegmentCondition {

    score : number;
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
				score : { type : 'n' },
				actions : { type : 'a', subTypeConstructor : KalturaMonetizationCondition, subType : 'KalturaMonetizationCondition' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScoredMonetizationCondition',KalturaScoredMonetizationCondition);
