
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPriceDetails } from './KalturaPriceDetails';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaDiscountModule } from './KalturaDiscountModule';
import { KalturaCouponsGroup } from './KalturaCouponsGroup';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaUsageModule } from './KalturaUsageModule';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPpvArgs  extends KalturaObjectBaseArgs {
    id? : string;
	name? : string;
	price? : KalturaPriceDetails;
	fileTypes? : KalturaIntegerValue[];
	discountModule? : KalturaDiscountModule;
	couponsGroup? : KalturaCouponsGroup;
	descriptions? : KalturaTranslationToken[];
	productCode? : string;
	isSubscriptionOnly? : boolean;
	firstDeviceLimitation? : boolean;
	usageModule? : KalturaUsageModule;
}

/** 
* PPV details
**/
export class KalturaPpv extends KalturaObjectBase {

    id : string;
	name : string;
	price : KalturaPriceDetails;
	fileTypes : KalturaIntegerValue[];
	discountModule : KalturaDiscountModule;
	couponsGroup : KalturaCouponsGroup;
	descriptions : KalturaTranslationToken[];
	productCode : string;
	isSubscriptionOnly : boolean;
	firstDeviceLimitation : boolean;
	usageModule : KalturaUsageModule;

    constructor(data? : KalturaPpvArgs)
    {
        super(data);
        if (typeof this.fileTypes === 'undefined') this.fileTypes = [];
		if (typeof this.descriptions === 'undefined') this.descriptions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPpv' },
				id : { type : 's' },
				name : { type : 's' },
				price : { type : 'o', subTypeConstructor : KalturaPriceDetails, subType : 'KalturaPriceDetails' },
				fileTypes : { type : 'a', subTypeConstructor : KalturaIntegerValue, subType : 'KalturaIntegerValue' },
				discountModule : { type : 'o', subTypeConstructor : KalturaDiscountModule, subType : 'KalturaDiscountModule' },
				couponsGroup : { type : 'o', subTypeConstructor : KalturaCouponsGroup, subType : 'KalturaCouponsGroup' },
				descriptions : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				productCode : { type : 's' },
				isSubscriptionOnly : { type : 'b' },
				firstDeviceLimitation : { type : 'b' },
				usageModule : { type : 'o', subTypeConstructor : KalturaUsageModule, subType : 'KalturaUsageModule' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPpv',KalturaPpv);
