
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPrice } from './KalturaPrice';
import { KalturaEntitlementDiscountDetails } from './KalturaEntitlementDiscountDetails';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEntitlementPriceDetailsArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaEntitlementPriceDetails extends KalturaObjectBase {

    readonly fullPrice : KalturaPrice;
	readonly discountDetails : KalturaEntitlementDiscountDetails[];

    constructor(data? : KalturaEntitlementPriceDetailsArgs)
    {
        super(data);
        if (typeof this.discountDetails === 'undefined') this.discountDetails = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntitlementPriceDetails' },
				fullPrice : { type : 'o', readOnly : true, subTypeConstructor : KalturaPrice, subType : 'KalturaPrice' },
				discountDetails : { type : 'a', readOnly : true, subTypeConstructor : KalturaEntitlementDiscountDetails, subType : 'KalturaEntitlementDiscountDetails' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntitlementPriceDetails',KalturaEntitlementPriceDetails);
