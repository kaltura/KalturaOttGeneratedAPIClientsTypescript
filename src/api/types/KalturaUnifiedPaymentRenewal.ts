
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPrice } from './KalturaPrice';
import { KalturaEntitlementRenewalBase } from './KalturaEntitlementRenewalBase';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUnifiedPaymentRenewalArgs  extends KalturaObjectBaseArgs {
    price? : KalturaPrice;
	date? : number;
	unifiedPaymentId? : number;
	entitlements? : KalturaEntitlementRenewalBase[];
	userId? : number;
}


export class KalturaUnifiedPaymentRenewal extends KalturaObjectBase {

    price : KalturaPrice;
	date : number;
	unifiedPaymentId : number;
	entitlements : KalturaEntitlementRenewalBase[];
	userId : number;

    constructor(data? : KalturaUnifiedPaymentRenewalArgs)
    {
        super(data);
        if (typeof this.entitlements === 'undefined') this.entitlements = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUnifiedPaymentRenewal' },
				price : { type : 'o', subTypeConstructor : KalturaPrice, subType : 'KalturaPrice' },
				date : { type : 'n' },
				unifiedPaymentId : { type : 'n' },
				entitlements : { type : 'a', subTypeConstructor : KalturaEntitlementRenewalBase, subType : 'KalturaEntitlementRenewalBase' },
				userId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUnifiedPaymentRenewal',KalturaUnifiedPaymentRenewal);
