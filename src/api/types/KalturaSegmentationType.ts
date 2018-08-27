
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaBaseSegmentCondition } from './KalturaBaseSegmentCondition';
import { KalturaBaseSegmentValue } from './KalturaBaseSegmentValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSegmentationTypeArgs  extends KalturaObjectBaseArgs {
    id? : number;
	multilingualName? : KalturaTranslationToken[];
	multilingualDescription? : KalturaTranslationToken[];
	conditions? : KalturaBaseSegmentCondition[];
	value? : KalturaBaseSegmentValue;
}


export class KalturaSegmentationType extends KalturaObjectBase {

    id : number;
	readonly name : string;
	multilingualName : KalturaTranslationToken[];
	readonly description : string;
	multilingualDescription : KalturaTranslationToken[];
	conditions : KalturaBaseSegmentCondition[];
	value : KalturaBaseSegmentValue;

    constructor(data? : KalturaSegmentationTypeArgs)
    {
        super(data);
        if (typeof this.multilingualName === 'undefined') this.multilingualName = [];
		if (typeof this.multilingualDescription === 'undefined') this.multilingualDescription = [];
		if (typeof this.conditions === 'undefined') this.conditions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentationType' },
				id : { type : 'n' },
				name : { type : 's', readOnly : true },
				multilingualName : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				description : { type : 's', readOnly : true },
				multilingualDescription : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				conditions : { type : 'a', subTypeConstructor : KalturaBaseSegmentCondition, subType : 'KalturaBaseSegmentCondition' },
				value : { type : 'o', subTypeConstructor : KalturaBaseSegmentValue, subType : 'KalturaBaseSegmentValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentationType',KalturaSegmentationType);
