
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMonetizationType } from './KalturaMonetizationType';
import { KalturaMathemticalOperatorType } from './KalturaMathemticalOperatorType';
import { KalturaBaseSegmentCondition, KalturaBaseSegmentConditionArgs } from './KalturaBaseSegmentCondition';

export interface KalturaMonetizationConditionArgs  extends KalturaBaseSegmentConditionArgs {
    days? : number;
	type? : KalturaMonetizationType;
	operator? : KalturaMathemticalOperatorType;
	businessModuleIdIn? : string;
	currencyCode? : string;
	minValue? : number;
	maxValue? : number;
}


export class KalturaMonetizationCondition extends KalturaBaseSegmentCondition {

    days : number;
	type : KalturaMonetizationType;
	operator : KalturaMathemticalOperatorType;
	businessModuleIdIn : string;
	currencyCode : string;
	minValue : number;
	maxValue : number;

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
				days : { type : 'n' },
				type : { type : 'es', subTypeConstructor : KalturaMonetizationType, subType : 'KalturaMonetizationType' },
				operator : { type : 'es', subTypeConstructor : KalturaMathemticalOperatorType, subType : 'KalturaMathemticalOperatorType' },
				businessModuleIdIn : { type : 's' },
				currencyCode : { type : 's' },
				minValue : { type : 'n' },
				maxValue : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMonetizationCondition',KalturaMonetizationCondition);
