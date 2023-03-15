
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseSegmentCondition } from './KalturaBaseSegmentCondition';
import { KalturaBooleanOperator } from './KalturaBooleanOperator';
import { KalturaBaseSegmentAction } from './KalturaBaseSegmentAction';
import { KalturaBaseSegmentValue } from './KalturaBaseSegmentValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSegmentationTypeArgs  extends KalturaObjectBaseArgs {
    name? : string;
	description? : string;
	conditions? : KalturaBaseSegmentCondition[];
	conditionsOperator? : KalturaBooleanOperator;
	actions? : KalturaBaseSegmentAction[];
	value? : KalturaBaseSegmentValue;
	assetUserRuleId? : number;
}


export class KalturaSegmentationType extends KalturaObjectBase {

    readonly id : number;
	name : string;
	description : string;
	conditions : KalturaBaseSegmentCondition[];
	conditionsOperator : KalturaBooleanOperator;
	actions : KalturaBaseSegmentAction[];
	value : KalturaBaseSegmentValue;
	readonly createDate : number;
	readonly updateDate : number;
	readonly executeDate : number;
	readonly version : number;
	assetUserRuleId : number;

    constructor(data? : KalturaSegmentationTypeArgs)
    {
        super(data);
        if (typeof this.conditions === 'undefined') this.conditions = [];
		if (typeof this.actions === 'undefined') this.actions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentationType' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				description : { type : 's' },
				conditions : { type : 'a', subTypeConstructor : KalturaBaseSegmentCondition, subType : 'KalturaBaseSegmentCondition' },
				conditionsOperator : { type : 'es', subTypeConstructor : KalturaBooleanOperator, subType : 'KalturaBooleanOperator' },
				actions : { type : 'a', subTypeConstructor : KalturaBaseSegmentAction, subType : 'KalturaBaseSegmentAction' },
				value : { type : 'o', subTypeConstructor : KalturaBaseSegmentValue, subType : 'KalturaBaseSegmentValue' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				executeDate : { type : 'n', readOnly : true },
				version : { type : 'n', readOnly : true },
				assetUserRuleId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentationType',KalturaSegmentationType);
