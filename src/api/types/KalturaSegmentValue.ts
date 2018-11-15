
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSegmentValueArgs  extends KalturaObjectBaseArgs {
    systematicName? : string;
	name? : string;
	value? : string;
}


export class KalturaSegmentValue extends KalturaObjectBase {

    readonly id : number;
	systematicName : string;
	name : string;
	value : string;

    constructor(data? : KalturaSegmentValueArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentValue' },
				id : { type : 'n', readOnly : true },
				systematicName : { type : 's' },
				name : { type : 's' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentValue',KalturaSegmentValue);
