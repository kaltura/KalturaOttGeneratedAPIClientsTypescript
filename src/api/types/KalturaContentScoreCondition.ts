
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaContentActionCondition } from './KalturaContentActionCondition';
import { KalturaBaseSegmentCondition, KalturaBaseSegmentConditionArgs } from './KalturaBaseSegmentCondition';

export interface KalturaContentScoreConditionArgs  extends KalturaBaseSegmentConditionArgs {
    minScore? : number;
	maxScore? : number;
	days? : number;
	field? : string;
	value? : string;
	actions? : KalturaContentActionCondition[];
}


export class KalturaContentScoreCondition extends KalturaBaseSegmentCondition {

    minScore : number;
	maxScore : number;
	days : number;
	field : string;
	value : string;
	actions : KalturaContentActionCondition[];

    constructor(data? : KalturaContentScoreConditionArgs)
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
                objectType : { type : 'c', default : 'KalturaContentScoreCondition' },
				minScore : { type : 'n' },
				maxScore : { type : 'n' },
				days : { type : 'n' },
				field : { type : 's' },
				value : { type : 's' },
				actions : { type : 'a', subTypeConstructor : KalturaContentActionCondition, subType : 'KalturaContentActionCondition' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaContentScoreCondition',KalturaContentScoreCondition);
