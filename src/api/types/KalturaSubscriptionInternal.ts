
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaPremiumService } from './KalturaPremiumService';
import { KalturaSubscriptionCouponGroup } from './KalturaSubscriptionCouponGroup';
import { KalturaProductCode } from './KalturaProductCode';
import { KalturaSubscriptionDependencyType } from './KalturaSubscriptionDependencyType';
import { KalturaAdsPolicy } from './KalturaAdsPolicy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSubscriptionInternalArgs  extends KalturaObjectBaseArgs {
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
	couponsGroups? : KalturaSubscriptionCouponGroup[];
	productCodes? : KalturaProductCode[];
	dependencyType? : KalturaSubscriptionDependencyType;
	externalId? : string;
	isCancellationBlocked? : boolean;
	preSaleDate? : number;
	adsPolicy? : KalturaAdsPolicy;
	adsParam? : string;
	isActive? : boolean;
}


export class KalturaSubscriptionInternal extends KalturaObjectBase {

    channelsIds : string;
	startDate : number;
	endDate : number;
	fileTypesIds : string;
	internalDiscountModuleId : number;
	readonly name : string;
	multilingualName : KalturaTranslationToken[];
	readonly description : string;
	multilingualDescription : KalturaTranslationToken[];
	prorityInOrder : number;
	pricePlanIds : string;
	previewModuleId : number;
	householdLimitationsId : number;
	gracePeriodMinutes : number;
	premiumServices : KalturaPremiumService[];
	couponsGroups : KalturaSubscriptionCouponGroup[];
	productCodes : KalturaProductCode[];
	dependencyType : KalturaSubscriptionDependencyType;
	externalId : string;
	isCancellationBlocked : boolean;
	preSaleDate : number;
	adsPolicy : KalturaAdsPolicy;
	adsParam : string;
	isActive : boolean;

    constructor(data? : KalturaSubscriptionInternalArgs)
    {
        super(data);
        if (typeof this.multilingualName === 'undefined') this.multilingualName = [];
		if (typeof this.multilingualDescription === 'undefined') this.multilingualDescription = [];
		if (typeof this.premiumServices === 'undefined') this.premiumServices = [];
		if (typeof this.couponsGroups === 'undefined') this.couponsGroups = [];
		if (typeof this.productCodes === 'undefined') this.productCodes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionInternal' },
				channelsIds : { type : 's' },
				startDate : { type : 'n' },
				endDate : { type : 'n' },
				fileTypesIds : { type : 's' },
				internalDiscountModuleId : { type : 'n' },
				name : { type : 's', readOnly : true },
				multilingualName : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				description : { type : 's', readOnly : true },
				multilingualDescription : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				prorityInOrder : { type : 'n' },
				pricePlanIds : { type : 's' },
				previewModuleId : { type : 'n' },
				householdLimitationsId : { type : 'n' },
				gracePeriodMinutes : { type : 'n' },
				premiumServices : { type : 'a', subTypeConstructor : KalturaPremiumService, subType : 'KalturaPremiumService' },
				couponsGroups : { type : 'a', subTypeConstructor : KalturaSubscriptionCouponGroup, subType : 'KalturaSubscriptionCouponGroup' },
				productCodes : { type : 'a', subTypeConstructor : KalturaProductCode, subType : 'KalturaProductCode' },
				dependencyType : { type : 'es', subTypeConstructor : KalturaSubscriptionDependencyType, subType : 'KalturaSubscriptionDependencyType' },
				externalId : { type : 's' },
				isCancellationBlocked : { type : 'b' },
				preSaleDate : { type : 'n' },
				adsPolicy : { type : 'es', subTypeConstructor : KalturaAdsPolicy, subType : 'KalturaAdsPolicy' },
				adsParam : { type : 's' },
				isActive : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionInternal',KalturaSubscriptionInternal);
