
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPrice } from './KalturaPrice';
import { KalturaPurchaseStatus } from './KalturaPurchaseStatus';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPPVItemPriceDetailsArgs  extends KalturaObjectBaseArgs {
    ppvModuleId? : string;
	isSubscriptionOnly? : boolean;
	price? : KalturaPrice;
	fullPrice? : KalturaPrice;
	purchaseStatus? : KalturaPurchaseStatus;
	subscriptionId? : string;
	collectionId? : string;
	prePaidId? : string;
	ppvDescriptions? : KalturaTranslationToken[];
	purchaseUserId? : string;
	purchasedMediaFileId? : number;
	relatedMediaFileIds? : KalturaIntegerValue[];
	startDate? : number;
	endDate? : number;
	discountEndDate? : number;
	firstDeviceName? : string;
	isInCancelationPeriod? : boolean;
	ppvProductCode? : string;
}

/** 
* PPV item price details
**/
export class KalturaPPVItemPriceDetails extends KalturaObjectBase {

    ppvModuleId : string;
	isSubscriptionOnly : boolean;
	price : KalturaPrice;
	fullPrice : KalturaPrice;
	purchaseStatus : KalturaPurchaseStatus;
	subscriptionId : string;
	collectionId : string;
	prePaidId : string;
	ppvDescriptions : KalturaTranslationToken[];
	purchaseUserId : string;
	purchasedMediaFileId : number;
	relatedMediaFileIds : KalturaIntegerValue[];
	startDate : number;
	endDate : number;
	discountEndDate : number;
	firstDeviceName : string;
	isInCancelationPeriod : boolean;
	ppvProductCode : string;

    constructor(data? : KalturaPPVItemPriceDetailsArgs)
    {
        super(data);
        if (typeof this.ppvDescriptions === 'undefined') this.ppvDescriptions = [];
		if (typeof this.relatedMediaFileIds === 'undefined') this.relatedMediaFileIds = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPPVItemPriceDetails' },
				ppvModuleId : { type : 's' },
				isSubscriptionOnly : { type : 'b' },
				price : { type : 'o', subTypeConstructor : KalturaPrice, subType : 'KalturaPrice' },
				fullPrice : { type : 'o', subTypeConstructor : KalturaPrice, subType : 'KalturaPrice' },
				purchaseStatus : { type : 'es', subTypeConstructor : KalturaPurchaseStatus, subType : 'KalturaPurchaseStatus' },
				subscriptionId : { type : 's' },
				collectionId : { type : 's' },
				prePaidId : { type : 's' },
				ppvDescriptions : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				purchaseUserId : { type : 's' },
				purchasedMediaFileId : { type : 'n' },
				relatedMediaFileIds : { type : 'a', subTypeConstructor : KalturaIntegerValue, subType : 'KalturaIntegerValue' },
				startDate : { type : 'n' },
				endDate : { type : 'n' },
				discountEndDate : { type : 'n' },
				firstDeviceName : { type : 's' },
				isInCancelationPeriod : { type : 'b' },
				ppvProductCode : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPPVItemPriceDetails',KalturaPPVItemPriceDetails);
