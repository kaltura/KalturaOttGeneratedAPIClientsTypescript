
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRatioArgs  extends KalturaObjectBaseArgs {
    name? : string;
	height? : number;
	width? : number;
	precisionPrecentage? : number;
}


export class KalturaRatio extends KalturaObjectBase {

    readonly id : number;
	name : string;
	height : number;
	width : number;
	precisionPrecentage : number;

    constructor(data? : KalturaRatioArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRatio' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				height : { type : 'n' },
				width : { type : 'n' },
				precisionPrecentage : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRatio',KalturaRatio);
