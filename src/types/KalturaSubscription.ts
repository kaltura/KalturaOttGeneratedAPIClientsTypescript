
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseChannel } from './KalturaBaseChannel';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaPriceDetails } from './KalturaPriceDetails';
import { KalturaDiscountModule } from './KalturaDiscountModule';
import { KalturaMultilingualString } from './KalturaMultilingualString';
import { KalturaPricePlan } from './KalturaPricePlan';
import { KalturaPreviewModule } from './KalturaPreviewModule';
import { KalturaPremiumService } from './KalturaPremiumService';
import { KalturaOTTUserType } from './KalturaOTTUserType';
import { KalturaCouponsGroup } from './KalturaCouponsGroup';
import { KalturaProductCode } from './KalturaProductCode';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSubscriptionArgs  extends KalturaObjectBaseArgs {
    id? : string;
	channels? : KalturaBaseChannel[];
	startDate? : number;
	endDate? : number;
	fileTypes? : KalturaIntegerValue[];
	isRenewable? : boolean;
	renewalsNumber? : number;
	isInfiniteRenewal? : boolean;
	price? : KalturaPriceDetails;
	discountModule? : KalturaDiscountModule;
	name? : string;
	multilingualName? : KalturaMultilingualString;
	description? : string;
	multilingualDescription? : KalturaMultilingualString;
	mediaId? : number;
	prorityInOrder? : number;
	pricePlans? : KalturaPricePlan[];
	previewModule? : KalturaPreviewModule;
	householdLimitationsId? : number;
	gracePeriodMinutes? : number;
	premiumServices? : KalturaPremiumService[];
	maxViewsNumber? : number;
	viewLifeCycle? : number;
	waiverPeriod? : number;
	isWaiverEnabled? : boolean;
	userTypes? : KalturaOTTUserType[];
	couponsGroups? : KalturaCouponsGroup[];
	productCodes? : KalturaProductCode[];
}

/** 
* Subscription details
**/
export class KalturaSubscription extends KalturaObjectBase {

    id : string;
	channels : KalturaBaseChannel[];
	startDate : number;
	endDate : number;
	fileTypes : KalturaIntegerValue[];
	isRenewable : boolean;
	renewalsNumber : number;
	isInfiniteRenewal : boolean;
	price : KalturaPriceDetails;
	discountModule : KalturaDiscountModule;
	name : string;
	multilingualName : KalturaMultilingualString;
	description : string;
	multilingualDescription : KalturaMultilingualString;
	mediaId : number;
	prorityInOrder : number;
	pricePlans : KalturaPricePlan[];
	previewModule : KalturaPreviewModule;
	householdLimitationsId : number;
	gracePeriodMinutes : number;
	premiumServices : KalturaPremiumService[];
	maxViewsNumber : number;
	viewLifeCycle : number;
	waiverPeriod : number;
	isWaiverEnabled : boolean;
	userTypes : KalturaOTTUserType[];
	couponsGroups : KalturaCouponsGroup[];
	productCodes : KalturaProductCode[];

    constructor(data? : KalturaSubscriptionArgs)
    {
        super(data);
        if (typeof this.channels === 'undefined') this.channels = [];
		if (typeof this.fileTypes === 'undefined') this.fileTypes = [];
		if (typeof this.pricePlans === 'undefined') this.pricePlans = [];
		if (typeof this.premiumServices === 'undefined') this.premiumServices = [];
		if (typeof this.userTypes === 'undefined') this.userTypes = [];
		if (typeof this.couponsGroups === 'undefined') this.couponsGroups = [];
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
				channels : { type : 'a', subTypeConstructor : KalturaBaseChannel, subType : 'KalturaBaseChannel' },
				startDate : { type : 'n' },
				endDate : { type : 'n' },
				fileTypes : { type : 'a', subTypeConstructor : KalturaIntegerValue, subType : 'KalturaIntegerValue' },
				isRenewable : { type : 'b' },
				renewalsNumber : { type : 'n' },
				isInfiniteRenewal : { type : 'b' },
				price : { type : 'o', subTypeConstructor : KalturaPriceDetails, subType : 'KalturaPriceDetails' },
				discountModule : { type : 'o', subTypeConstructor : KalturaDiscountModule, subType : 'KalturaDiscountModule' },
				name : { type : 's' },
				multilingualName : { type : 'o', subTypeConstructor : KalturaMultilingualString, subType : 'KalturaMultilingualString' },
				description : { type : 's' },
				multilingualDescription : { type : 'o', subTypeConstructor : KalturaMultilingualString, subType : 'KalturaMultilingualString' },
				mediaId : { type : 'n' },
				prorityInOrder : { type : 'n' },
				pricePlans : { type : 'a', subTypeConstructor : KalturaPricePlan, subType : 'KalturaPricePlan' },
				previewModule : { type : 'o', subTypeConstructor : KalturaPreviewModule, subType : 'KalturaPreviewModule' },
				householdLimitationsId : { type : 'n' },
				gracePeriodMinutes : { type : 'n' },
				premiumServices : { type : 'a', subTypeConstructor : KalturaPremiumService, subType : 'KalturaPremiumService' },
				maxViewsNumber : { type : 'n' },
				viewLifeCycle : { type : 'n' },
				waiverPeriod : { type : 'n' },
				isWaiverEnabled : { type : 'b' },
				userTypes : { type : 'a', subTypeConstructor : KalturaOTTUserType, subType : 'KalturaOTTUserType' },
				couponsGroups : { type : 'a', subTypeConstructor : KalturaCouponsGroup, subType : 'KalturaCouponsGroup' },
				productCodes : { type : 'a', subTypeConstructor : KalturaProductCode, subType : 'KalturaProductCode' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscription',KalturaSubscription);
