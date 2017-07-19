
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPriceArgs  extends KalturaObjectBaseArgs {
    amount? : number;
	currency? : string;
	currencySign? : string;
}

/** 
* Price
**/
export class KalturaPrice extends KalturaObjectBase {

    amount : number;
	currency : string;
	currencySign : string;

    constructor(data? : KalturaPriceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPrice' },
				amount : { type : 'n' },
				currency : { type : 's' },
				currencySign : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPrice',KalturaPrice);
