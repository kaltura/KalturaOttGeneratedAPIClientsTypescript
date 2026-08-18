
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMathemticalOperatorType } from './KalturaMathemticalOperatorType';
import { KalturaMonetizationType } from './KalturaMonetizationType';
import { KalturaBaseSegmentCondition, KalturaBaseSegmentConditionArgs } from './KalturaBaseSegmentCondition';

export interface KalturaMonetizationConditionArgs  extends KalturaBaseSegmentConditionArgs {
    businessModuleIdIn? : string;
	currencyCode? : string;
	days? : number;
	maxValue? : number;
	minValue? : number;
	operator? : KalturaMathemticalOperatorType;
	type? : KalturaMonetizationType;
}


export class KalturaMonetizationCondition extends KalturaBaseSegmentCondition {

    businessModuleIdIn : string;
	currencyCode : string;
	days : number;
	maxValue : number;
	minValue : number;
	operator : KalturaMathemticalOperatorType;
	type : KalturaMonetizationType;

    constructor(data? : KalturaMonetizationConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMonetizationCondition' },
				businessModuleIdIn : { type : 's' },
				currencyCode : { type : 's' },
				days : { type : 'n' },
				maxValue : { type : 'n' },
				minValue : { type : 'n' },
				operator : { type : 'es', subTypeConstructor : KalturaMathemticalOperatorType, subType : 'KalturaMathemticalOperatorType' },
				type : { type : 'es', subTypeConstructor : KalturaMonetizationType, subType : 'KalturaMonetizationType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMonetizationCondition',KalturaMonetizationCondition);
