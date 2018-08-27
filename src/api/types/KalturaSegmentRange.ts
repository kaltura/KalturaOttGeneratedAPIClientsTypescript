
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSegmentRangeArgs  extends KalturaObjectBaseArgs {
    multilingualName? : KalturaTranslationToken[];
	gte? : number;
	gt? : number;
	lte? : number;
	lt? : number;
}


export class KalturaSegmentRange extends KalturaObjectBase {

    readonly name : string;
	multilingualName : KalturaTranslationToken[];
	gte : number;
	gt : number;
	lte : number;
	lt : number;

    constructor(data? : KalturaSegmentRangeArgs)
    {
        super(data);
        if (typeof this.multilingualName === 'undefined') this.multilingualName = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentRange' },
				name : { type : 's', readOnly : true },
				multilingualName : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				gte : { type : 'n' },
				gt : { type : 'n' },
				lte : { type : 'n' },
				lt : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentRange',KalturaSegmentRange);
