
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseChannel } from './KalturaBaseChannel';
import { KalturaDiscountModule } from './KalturaDiscountModule';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaUsageModule } from './KalturaUsageModule';
import { KalturaCouponsGroup } from './KalturaCouponsGroup';
import { KalturaCollectionCouponGroup } from './KalturaCollectionCouponGroup';
import { KalturaProductCode } from './KalturaProductCode';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaCollectionArgs  extends KalturaOTTObjectSupportNullableArgs {
    id? : string;
	channelsIds? : string;
	startDate? : number;
	endDate? : number;
	discountModuleId? : number;
	multilingualName? : KalturaTranslationToken[];
	multilingualDescription? : KalturaTranslationToken[];
	usageModuleId? : number;
	collectionCouponGroup? : KalturaCollectionCouponGroup[];
	externalId? : string;
	productCodes? : KalturaProductCode[];
	priceDetailsId? : number;
	isActive? : boolean;
	fileTypesIds? : string;
	assetUserRuleId? : number;
}


export class KalturaCollection extends KalturaOTTObjectSupportNullable {

    id : string;
	readonly channels : KalturaBaseChannel[];
	channelsIds : string;
	startDate : number;
	endDate : number;
	readonly discountModule : KalturaDiscountModule;
	discountModuleId : number;
	readonly name : string;
	multilingualName : KalturaTranslationToken[];
	readonly description : string;
	multilingualDescription : KalturaTranslationToken[];
	readonly usageModule : KalturaUsageModule;
	usageModuleId : number;
	readonly couponsGroups : KalturaCouponsGroup[];
	collectionCouponGroup : KalturaCollectionCouponGroup[];
	externalId : string;
	productCodes : KalturaProductCode[];
	priceDetailsId : number;
	isActive : boolean;
	readonly createDate : number;
	readonly updateDate : number;
	readonly virtualAssetId : number;
	readonly fileTypes : KalturaIntegerValue[];
	fileTypesIds : string;
	assetUserRuleId : number;

    constructor(data? : KalturaCollectionArgs)
    {
        super(data);
        if (typeof this.channels === 'undefined') this.channels = [];
		if (typeof this.multilingualName === 'undefined') this.multilingualName = [];
		if (typeof this.multilingualDescription === 'undefined') this.multilingualDescription = [];
		if (typeof this.couponsGroups === 'undefined') this.couponsGroups = [];
		if (typeof this.collectionCouponGroup === 'undefined') this.collectionCouponGroup = [];
		if (typeof this.productCodes === 'undefined') this.productCodes = [];
		if (typeof this.fileTypes === 'undefined') this.fileTypes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCollection' },
				id : { type : 's' },
				channels : { type : 'a', readOnly : true, subTypeConstructor : KalturaBaseChannel, subType : 'KalturaBaseChannel' },
				channelsIds : { type : 's' },
				startDate : { type : 'n' },
				endDate : { type : 'n' },
				discountModule : { type : 'o', readOnly : true, subTypeConstructor : KalturaDiscountModule, subType : 'KalturaDiscountModule' },
				discountModuleId : { type : 'n' },
				name : { type : 's', readOnly : true },
				multilingualName : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				description : { type : 's', readOnly : true },
				multilingualDescription : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				usageModule : { type : 'o', readOnly : true, subTypeConstructor : KalturaUsageModule, subType : 'KalturaUsageModule' },
				usageModuleId : { type : 'n' },
				couponsGroups : { type : 'a', readOnly : true, subTypeConstructor : KalturaCouponsGroup, subType : 'KalturaCouponsGroup' },
				collectionCouponGroup : { type : 'a', subTypeConstructor : KalturaCollectionCouponGroup, subType : 'KalturaCollectionCouponGroup' },
				externalId : { type : 's' },
				productCodes : { type : 'a', subTypeConstructor : KalturaProductCode, subType : 'KalturaProductCode' },
				priceDetailsId : { type : 'n' },
				isActive : { type : 'b' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				virtualAssetId : { type : 'n', readOnly : true },
				fileTypes : { type : 'a', readOnly : true, subTypeConstructor : KalturaIntegerValue, subType : 'KalturaIntegerValue' },
				fileTypesIds : { type : 's' },
				assetUserRuleId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCollection',KalturaCollection);
