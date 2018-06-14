
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseChannel } from './KalturaBaseChannel';
import { KalturaDiscountModule } from './KalturaDiscountModule';
import { KalturaTranslationToken } from './KalturaTranslationToken';
import { KalturaUsageModule } from './KalturaUsageModule';
import { KalturaCouponsGroup } from './KalturaCouponsGroup';
import { KalturaProductCode } from './KalturaProductCode';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCollectionArgs  extends KalturaObjectBaseArgs {
    id? : string;
	channels? : KalturaBaseChannel[];
	startDate? : number;
	endDate? : number;
	discountModule? : KalturaDiscountModule;
	name? : string;
	multilingualName? : KalturaTranslationToken[];
	description? : string;
	multilingualDescription? : KalturaTranslationToken[];
	usageModule? : KalturaUsageModule;
	couponsGroups? : KalturaCouponsGroup[];
	externalId? : string;
	productCodes? : KalturaProductCode[];
	priceDetailsId? : number;
}


export class KalturaCollection extends KalturaObjectBase {

    id : string;
	channels : KalturaBaseChannel[];
	startDate : number;
	endDate : number;
	discountModule : KalturaDiscountModule;
	name : string;
	multilingualName : KalturaTranslationToken[];
	description : string;
	multilingualDescription : KalturaTranslationToken[];
	usageModule : KalturaUsageModule;
	couponsGroups : KalturaCouponsGroup[];
	externalId : string;
	productCodes : KalturaProductCode[];
	priceDetailsId : number;

    constructor(data? : KalturaCollectionArgs)
    {
        super(data);
        if (typeof this.channels === 'undefined') this.channels = [];
		if (typeof this.multilingualName === 'undefined') this.multilingualName = [];
		if (typeof this.multilingualDescription === 'undefined') this.multilingualDescription = [];
		if (typeof this.couponsGroups === 'undefined') this.couponsGroups = [];
		if (typeof this.productCodes === 'undefined') this.productCodes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCollection' },
				id : { type : 's' },
				channels : { type : 'a', subTypeConstructor : KalturaBaseChannel, subType : 'KalturaBaseChannel' },
				startDate : { type : 'n' },
				endDate : { type : 'n' },
				discountModule : { type : 'o', subTypeConstructor : KalturaDiscountModule, subType : 'KalturaDiscountModule' },
				name : { type : 's' },
				multilingualName : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				description : { type : 's' },
				multilingualDescription : { type : 'a', subTypeConstructor : KalturaTranslationToken, subType : 'KalturaTranslationToken' },
				usageModule : { type : 'o', subTypeConstructor : KalturaUsageModule, subType : 'KalturaUsageModule' },
				couponsGroups : { type : 'a', subTypeConstructor : KalturaCouponsGroup, subType : 'KalturaCouponsGroup' },
				externalId : { type : 's' },
				productCodes : { type : 'a', subTypeConstructor : KalturaProductCode, subType : 'KalturaProductCode' },
				priceDetailsId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCollection',KalturaCollection);
