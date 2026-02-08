
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConditionLevel } from './KalturaConditionLevel';
import { KalturaContentTypeSelector } from './KalturaContentTypeSelector';
import { KalturaViewTimeConstraint } from './KalturaViewTimeConstraint';
import { KalturaLogicalOperator } from './KalturaLogicalOperator';
import { KalturaBaseAttributeConstraint } from './KalturaBaseAttributeConstraint';
import { KalturaBaseSegmentCondition, KalturaBaseSegmentConditionArgs } from './KalturaBaseSegmentCondition';

export interface KalturaBaseWatchConditionArgs  extends KalturaBaseSegmentConditionArgs {
    level? : KalturaConditionLevel;
	contentFilter? : KalturaContentTypeSelector;
	evaluationDays? : number;
	deviceFamilyIn? : string;
	viewTimeConstraint? : KalturaViewTimeConstraint;
	constraintsOperator? : KalturaLogicalOperator;
	constraintAttributes? : KalturaBaseAttributeConstraint[];
}


export class KalturaBaseWatchCondition extends KalturaBaseSegmentCondition {

    level : KalturaConditionLevel;
	contentFilter : KalturaContentTypeSelector;
	evaluationDays : number;
	deviceFamilyIn : string;
	viewTimeConstraint : KalturaViewTimeConstraint;
	constraintsOperator : KalturaLogicalOperator;
	constraintAttributes : KalturaBaseAttributeConstraint[];

    constructor(data? : KalturaBaseWatchConditionArgs)
    {
        super(data);
        if (typeof this.constraintAttributes === 'undefined') this.constraintAttributes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseWatchCondition' },
				level : { type : 'es', subTypeConstructor : KalturaConditionLevel, subType : 'KalturaConditionLevel' },
				contentFilter : { type : 'o', subTypeConstructor : KalturaContentTypeSelector, subType : 'KalturaContentTypeSelector' },
				evaluationDays : { type : 'n' },
				deviceFamilyIn : { type : 's' },
				viewTimeConstraint : { type : 'o', subTypeConstructor : KalturaViewTimeConstraint, subType : 'KalturaViewTimeConstraint' },
				constraintsOperator : { type : 'es', subTypeConstructor : KalturaLogicalOperator, subType : 'KalturaLogicalOperator' },
				constraintAttributes : { type : 'a', subTypeConstructor : KalturaBaseAttributeConstraint, subType : 'KalturaBaseAttributeConstraint' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseWatchCondition',KalturaBaseWatchCondition);
