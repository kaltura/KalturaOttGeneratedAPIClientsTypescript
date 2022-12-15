
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
	priceDetailsId? : number;
	fileTypesIds? : string;
	discountId? : number;
	couponsGroupId? : number;
	descriptions? : KalturaTranslationToken[];
	productCode? : string;
	isSubscriptionOnly? : boolean;
	firstDeviceLimitation? : boolean;
	usageModuleId? : number;
	adsPolicy? : KalturaAdsPolicy;
	isActive? : boolean;
	assetUserRuleId? : number;
}


export class KalturaPpv extends KalturaObjectBase {

    id : string;
	name : string;
	readonly price : KalturaPriceDetails;
	priceDetailsId : number;
	readonly fileTypes : KalturaIntegerValue[];
	fileTypesIds : string;
	readonly discountModule : KalturaDiscountModule;
	discountId : number;
	readonly couponsGroup : KalturaCouponsGroup;
	couponsGroupId : number;
	descriptions : KalturaTranslationToken[];
	productCode : string;
	isSubscriptionOnly : boolean;
	firstDeviceLimitation : boolean;
	readonly usageModule : KalturaUsageModule;
	usageModuleId : number;
	adsPolicy : KalturaAdsPolicy;
	isActive : boolean;
	readonly updateDate : number;
	readonly createDate : number;
	readonly virtualAssetId : number;
	assetUserRuleId : number;

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
				price : { type : 'o', readOnly : true, subTypeConstructor : KalturaPriceDetails, subType : 'KalturaPriceDetails' },
				priceDetailsId : { type : 'n' },
				fileTypes : { type : 'a', readOnly : true, subTypeConstructor : KalturaIntegerValue, subType : 'KalturaIntegerValue' },
				fileTypesIds : { type : 's' },
				discountModule : { type : 'o', readOnly : true, subTypeConstructor : KalturaDiscountModule, subType : 'KalturaDiscountModule' },
				discountId : { type : 'n' },
				couponsGroup : { type : 'o', readOnly : true, subTypeConstructor : KalturaCouponsGroup, subType : 'KalturaCouponsGroup' },
				couponsGroupId : { type : 'n' },
				descriptions : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				productCode : { type : 's' },
				isSubscriptionOnly : { type : 'b' },
				firstDeviceLimitation : { type : 'b' },
				usageModule : { type : 'o', readOnly : true, subTypeConstructor : KalturaUsageModule, subType : 'KalturaUsageModule' },
				usageModuleId : { type : 'n' },
				adsPolicy : { type : 'es', subTypeConstructor : KalturaAdsPolicy, subType : 'KalturaAdsPolicy' },
				isActive : { type : 'b' },
				updateDate : { type : 'n', readOnly : true },
				createDate : { type : 'n', readOnly : true },
				virtualAssetId : { type : 'n', readOnly : true },
				assetUserRuleId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPpv',KalturaPpv);
