
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPPVItemPriceDetails } from './KalturaPPVItemPriceDetails';
import { KalturaProductPrice, KalturaProductPriceArgs } from './KalturaProductPrice';

export interface KalturaItemPriceArgs  extends KalturaProductPriceArgs {
    fileId? : number;
	ppvPriceDetails? : KalturaPPVItemPriceDetails[];
}

/** 
* PPV price details
**/
export class KalturaItemPrice extends KalturaProductPrice {

    fileId : number;
	ppvPriceDetails : KalturaPPVItemPriceDetails[];

    constructor(data? : KalturaItemPriceArgs)
    {
        super(data);
        if (typeof this.ppvPriceDetails === 'undefined') this.ppvPriceDetails = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaItemPrice' },
				fileId : { type : 'n' },
				ppvPriceDetails : { type : 'a', subTypeConstructor : KalturaPPVItemPriceDetails, subType : 'KalturaPPVItemPriceDetails' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaItemPrice',KalturaItemPrice);
