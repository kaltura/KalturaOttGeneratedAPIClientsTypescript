
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseChannel } from './KalturaBaseChannel';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaPriceDetails } from './KalturaPriceDetails';
import { KalturaDiscountModule } from './KalturaDiscountModule';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaPreviewModule } from './KalturaPreviewModule';
import { KalturaPremiumService } from './KalturaPremiumService';
import { KalturaOTTUserType } from './KalturaOTTUserType';
import { KalturaCouponsGroup } from './KalturaCouponsGroup';
import { KalturaSubscriptionCouponGroup } from './KalturaSubscriptionCouponGroup';
import { KalturaProductCode } from './KalturaProductCode';
import { KalturaSubscriptionDependencyType } from './KalturaSubscriptionDependencyType';
import { KalturaAdsPolicy } from './KalturaAdsPolicy';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaSubscriptionArgs  extends KalturaOTTObjectSupportNullableArgs {
    id? : string;
	channelsIds? : string;
	startDate? : number;
	endDate? : number;
	fileTypesIds? : string;
	internalDiscountModuleId? : number;
	multilingualName? : KalturaTranslationToken[];
	multilingualDescription? : KalturaTranslationToken[];
	prorityInOrder? : number;
	pricePlanIds? : string;
	previewModuleId? : number;
	householdLimitationsId? : number;
	gracePeriodMinutes? : number;
	premiumServices? : KalturaPremiumService[];
	subscriptionCouponGroup? : KalturaSubscriptionCouponGroup[];
	productCodes? : KalturaProductCode[];
	dependencyType? : KalturaSubscriptionDependencyType;
	externalId? : string;
	isCancellationBlocked? : boolean;
	preSaleDate? : number;
	adsPolicy? : KalturaAdsPolicy;
	adsParam? : string;
	isActive? : boolean;
}


export class KalturaSubscription extends KalturaOTTObjectSupportNullable {

    id : string;
	readonly channels : KalturaBaseChannel[];
	channelsIds : string;
	startDate : number;
	endDate : number;
	readonly fileTypes : KalturaIntegerValue[];
	fileTypesIds : string;
	readonly isRenewable : boolean;
	readonly renewalsNumber : number;
	readonly isInfiniteRenewal : boolean;
	readonly price : KalturaPriceDetails;
	readonly discountModule : KalturaDiscountModule;
	internalDiscountModuleId : number;
	readonly name : string;
	multilingualName : KalturaTranslationToken[];
	readonly description : string;
	multilingualDescription : KalturaTranslationToken[];
	readonly mediaId : number;
	prorityInOrder : number;
	pricePlanIds : string;
	readonly previewModule : KalturaPreviewModule;
	previewModuleId : number;
	householdLimitationsId : number;
	gracePeriodMinutes : number;
	premiumServices : KalturaPremiumService[];
	readonly maxViewsNumber : number;
	readonly viewLifeCycle : number;
	readonly waiverPeriod : number;
	readonly isWaiverEnabled : boolean;
	readonly userTypes : KalturaOTTUserType[];
	readonly couponsGroups : KalturaCouponsGroup[];
	subscriptionCouponGroup : KalturaSubscriptionCouponGroup[];
	productCodes : KalturaProductCode[];
	dependencyType : KalturaSubscriptionDependencyType;
	externalId : string;
	isCancellationBlocked : boolean;
	preSaleDate : number;
	adsPolicy : KalturaAdsPolicy;
	adsParam : string;
	isActive : boolean;
	readonly createDate : number;
	readonly updateDate : number;

    constructor(data? : KalturaSubscriptionArgs)
    {
        super(data);
        if (typeof this.channels === 'undefined') this.channels = [];
		if (typeof this.fileTypes === 'undefined') this.fileTypes = [];
		if (typeof this.multilingualName === 'undefined') this.multilingualName = [];
		if (typeof this.multilingualDescription === 'undefined') this.multilingualDescription = [];
		if (typeof this.premiumServices === 'undefined') this.premiumServices = [];
		if (typeof this.userTypes === 'undefined') this.userTypes = [];
		if (typeof this.couponsGroups === 'undefined') this.couponsGroups = [];
		if (typeof this.subscriptionCouponGroup === 'undefined') this.subscriptionCouponGroup = [];
		if (typeof this.productCodes === 'undefined') this.productCodes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscription' },
				id : { type : 's' },
				channels : { type : 'a', readOnly : true, subTypeConstructor : KalturaBaseChannel, subType : 'KalturaBaseChannel' },
				channelsIds : { type : 's' },
				startDate : { type : 'n' },
				endDate : { type : 'n' },
				fileTypes : { type : 'a', readOnly : true, subTypeConstructor : KalturaIntegerValue, subType : 'KalturaIntegerValue' },
				fileTypesIds : { type : 's' },
				isRenewable : { type : 'b', readOnly : true },
				renewalsNumber : { type : 'n', readOnly : true },
				isInfiniteRenewal : { type : 'b', readOnly : true },
				price : { type : 'o', readOnly : true, subTypeConstructor : KalturaPriceDetails, subType : 'KalturaPriceDetails' },
				discountModule : { type : 'o', readOnly : true, subTypeConstructor : KalturaDiscountModule, subType : 'KalturaDiscountModule' },
				internalDiscountModuleId : { type : 'n' },
				name : { type : 's', readOnly : true },
				multilingualName : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				description : { type : 's', readOnly : true },
				multilingualDescription : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				mediaId : { type : 'n', readOnly : true },
				prorityInOrder : { type : 'n' },
				pricePlanIds : { type : 's' },
				previewModule : { type : 'o', readOnly : true, subTypeConstructor : KalturaPreviewModule, subType : 'KalturaPreviewModule' },
				previewModuleId : { type : 'n' },
				householdLimitationsId : { type : 'n' },
				gracePeriodMinutes : { type : 'n' },
				premiumServices : { type : 'a', subTypeConstructor : KalturaPremiumService, subType : 'KalturaPremiumService' },
				maxViewsNumber : { type : 'n', readOnly : true },
				viewLifeCycle : { type : 'n', readOnly : true },
				waiverPeriod : { type : 'n', readOnly : true },
				isWaiverEnabled : { type : 'b', readOnly : true },
				userTypes : { type : 'a', readOnly : true, subTypeConstructor : KalturaOTTUserType, subType : 'KalturaOTTUserType' },
				couponsGroups : { type : 'a', readOnly : true, subTypeConstructor : KalturaCouponsGroup, subType : 'KalturaCouponsGroup' },
				subscriptionCouponGroup : { type : 'a', subTypeConstructor : KalturaSubscriptionCouponGroup, subType : 'KalturaSubscriptionCouponGroup' },
				productCodes : { type : 'a', subTypeConstructor : KalturaProductCode, subType : 'KalturaProductCode' },
				dependencyType : { type : 'es', subTypeConstructor : KalturaSubscriptionDependencyType, subType : 'KalturaSubscriptionDependencyType' },
				externalId : { type : 's' },
				isCancellationBlocked : { type : 'b' },
				preSaleDate : { type : 'n' },
				adsPolicy : { type : 'es', subTypeConstructor : KalturaAdsPolicy, subType : 'KalturaAdsPolicy' },
				adsParam : { type : 's' },
				isActive : { type : 'b' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscription',KalturaSubscription);
