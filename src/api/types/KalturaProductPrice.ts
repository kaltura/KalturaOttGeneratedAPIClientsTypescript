
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaPrice } from './KalturaPrice';
import { KalturaPurchaseStatus } from './KalturaPurchaseStatus';
import { KalturaPromotionInfo } from './KalturaPromotionInfo';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaProductPriceArgs  extends KalturaObjectBaseArgs {
    productId? : string;
	productType? : KalturaTransactionType;
	price? : KalturaPrice;
	fullPrice? : KalturaPrice;
	purchaseStatus? : KalturaPurchaseStatus;
	promotionInfo? : KalturaPromotionInfo;
}


export class KalturaProductPrice extends KalturaObjectBase {

    productId : string;
	productType : KalturaTransactionType;
	price : KalturaPrice;
	fullPrice : KalturaPrice;
	purchaseStatus : KalturaPurchaseStatus;
	promotionInfo : KalturaPromotionInfo;

    constructor(data? : KalturaProductPriceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProductPrice' },
				productId : { type : 's' },
				productType : { type : 'es', subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' },
				price : { type : 'o', subTypeConstructor : KalturaPrice, subType : 'KalturaPrice' },
				fullPrice : { type : 'o', subTypeConstructor : KalturaPrice, subType : 'KalturaPrice' },
				purchaseStatus : { type : 'es', subTypeConstructor : KalturaPurchaseStatus, subType : 'KalturaPurchaseStatus' },
				promotionInfo : { type : 'o', subTypeConstructor : KalturaPromotionInfo, subType : 'KalturaPromotionInfo' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaProductPrice',KalturaProductPrice);
