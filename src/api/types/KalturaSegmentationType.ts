
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseSegmentCondition } from './KalturaBaseSegmentCondition';
import { KalturaBaseSegmentValue } from './KalturaBaseSegmentValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSegmentationTypeArgs  extends KalturaObjectBaseArgs {
    name? : string;
	description? : string;
	conditions? : KalturaBaseSegmentCondition[];
	value? : KalturaBaseSegmentValue;
	affectsContentOrdering? : boolean;
}


export class KalturaSegmentationType extends KalturaObjectBase {

    readonly id : number;
	name : string;
	description : string;
	conditions : KalturaBaseSegmentCondition[];
	value : KalturaBaseSegmentValue;
	readonly createDate : number;
	affectsContentOrdering : boolean;

    constructor(data? : KalturaSegmentationTypeArgs)
    {
        super(data);
        if (typeof this.conditions === 'undefined') this.conditions = [];
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
				value : { type : 'o', subTypeConstructor : KalturaBaseSegmentValue, subType : 'KalturaBaseSegmentValue' },
				createDate : { type : 'n', readOnly : true },
				affectsContentOrdering : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentationType',KalturaSegmentationType);
