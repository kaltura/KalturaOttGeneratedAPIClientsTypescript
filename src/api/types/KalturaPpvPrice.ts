
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaProductPrice, KalturaProductPriceArgs } from './KalturaProductPrice';

export interface KalturaPpvPriceArgs  extends KalturaProductPriceArgs {
    fileId? : number;
	ppvModuleId? : string;
	isSubscriptionOnly? : boolean;
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


export class KalturaPpvPrice extends KalturaProductPrice {

    fileId : number;
	ppvModuleId : string;
	isSubscriptionOnly : boolean;
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

    constructor(data? : KalturaPpvPriceArgs)
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
                objectType : { type : 'c', default : 'KalturaPpvPrice' },
				fileId : { type : 'n' },
				ppvModuleId : { type : 's' },
				isSubscriptionOnly : { type : 'b' },
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

KalturaTypesFactory.registerType('KalturaPpvPrice',KalturaPpvPrice);
