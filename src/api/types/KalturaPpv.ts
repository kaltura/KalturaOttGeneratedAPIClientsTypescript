
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPriceDetails } from './KalturaPriceDetails';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaDiscountModule } from './KalturaDiscountModule';
import { KalturaCouponsGroup } from './KalturaCouponsGroup';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaUsageModule } from './KalturaUsageModule';
import { KalturaAdsPolicy } from './KalturaAdsPolicy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPpvArgs  extends KalturaObjectBaseArgs {
    id? : string;
	name? : string;
	price? : KalturaPriceDetails;
	fileTypes? : KalturaIntegerValue[];
	fileTypesIds? : string;
	discountModule? : KalturaDiscountModule;
	couponsGroup? : KalturaCouponsGroup;
	descriptions? : KalturaTranslationToken[];
	isSubscriptionOnly? : boolean;
	firstDeviceLimitation? : boolean;
	usageModule? : KalturaUsageModule;
	externalId? : string;
	adsPolicy? : KalturaAdsPolicy;
	isActive? : boolean;
}


export class KalturaPpv extends KalturaObjectBase {

    id : string;
	name : string;
	price : KalturaPriceDetails;
	fileTypes : KalturaIntegerValue[];
	fileTypesIds : string;
	discountModule : KalturaDiscountModule;
	couponsGroup : KalturaCouponsGroup;
	descriptions : KalturaTranslationToken[];
	readonly productCode : string;
	isSubscriptionOnly : boolean;
	firstDeviceLimitation : boolean;
	usageModule : KalturaUsageModule;
	externalId : string;
	adsPolicy : KalturaAdsPolicy;
	isActive : boolean;
	readonly updateDate : number;
	readonly createDate : number;

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
				fileTypesIds : { type : 's' },
				discountModule : { type : 'o', subTypeConstructor : KalturaDiscountModule, subType : 'KalturaDiscountModule' },
				couponsGroup : { type : 'o', subTypeConstructor : KalturaCouponsGroup, subType : 'KalturaCouponsGroup' },
				descriptions : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				productCode : { type : 's', readOnly : true },
				isSubscriptionOnly : { type : 'b' },
				firstDeviceLimitation : { type : 'b' },
				usageModule : { type : 'o', subTypeConstructor : KalturaUsageModule, subType : 'KalturaUsageModule' },
				externalId : { type : 's' },
				adsPolicy : { type : 'es', subTypeConstructor : KalturaAdsPolicy, subType : 'KalturaAdsPolicy' },
				isActive : { type : 'b' },
				updateDate : { type : 'n', readOnly : true },
				createDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPpv',KalturaPpv);
