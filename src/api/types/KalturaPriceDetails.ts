
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPrice } from './KalturaPrice';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPriceDetailsArgs  extends KalturaObjectBaseArgs {
    id? : number;
	name? : string;
	multiCurrencyPrice? : KalturaPrice[];
	descriptions? : KalturaTranslationToken[];
}


export class KalturaPriceDetails extends KalturaObjectBase {

    id : number;
	name : string;
	readonly price : KalturaPrice;
	multiCurrencyPrice : KalturaPrice[];
	descriptions : KalturaTranslationToken[];

    constructor(data? : KalturaPriceDetailsArgs)
    {
        super(data);
        if (typeof this.multiCurrencyPrice === 'undefined') this.multiCurrencyPrice = [];
		if (typeof this.descriptions === 'undefined') this.descriptions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPriceDetails' },
				id : { type : 'n' },
				name : { type : 's' },
				price : { type : 'o', readOnly : true, subTypeConstructor : KalturaPrice, subType : 'KalturaPrice' },
				multiCurrencyPrice : { type : 'a', subTypeConstructor : KalturaPrice, subType : 'KalturaPrice' },
				descriptions : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPriceDetails',KalturaPriceDetails);
