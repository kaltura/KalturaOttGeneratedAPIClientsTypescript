
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCurrencyArgs  extends KalturaObjectBaseArgs {
    id? : number;
	name? : string;
	code? : string;
	sign? : string;
	isDefault? : boolean;
}


export class KalturaCurrency extends KalturaObjectBase {

    id : number;
	name : string;
	code : string;
	sign : string;
	isDefault : boolean;

    constructor(data? : KalturaCurrencyArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCurrency' },
				id : { type : 'n' },
				name : { type : 's' },
				code : { type : 's' },
				sign : { type : 's' },
				isDefault : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCurrency',KalturaCurrency);
