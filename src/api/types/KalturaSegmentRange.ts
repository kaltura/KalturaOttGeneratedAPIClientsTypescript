
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSegmentRangeArgs  extends KalturaObjectBaseArgs {
    systematicName? : string;
	name? : string;
	gte? : number;
	gt? : number;
	lte? : number;
	lt? : number;
	equals? : number;
}


export class KalturaSegmentRange extends KalturaObjectBase {

    readonly id : number;
	systematicName : string;
	name : string;
	gte : number;
	gt : number;
	lte : number;
	lt : number;
	equals : number;

    constructor(data? : KalturaSegmentRangeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentRange' },
				id : { type : 'n', readOnly : true },
				systematicName : { type : 's' },
				name : { type : 's' },
				gte : { type : 'n' },
				gt : { type : 'n' },
				lte : { type : 'n' },
				lt : { type : 'n' },
				equals : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentRange',KalturaSegmentRange);
