
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPrice } from './KalturaPrice';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEntitlementRenewalArgs  extends KalturaObjectBaseArgs {
    price? : KalturaPrice;
	date? : number;
	purchaseId? : number;
	subscriptionId? : number;
}


export class KalturaEntitlementRenewal extends KalturaObjectBase {

    price : KalturaPrice;
	date : number;
	purchaseId : number;
	subscriptionId : number;

    constructor(data? : KalturaEntitlementRenewalArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntitlementRenewal' },
				price : { type : 'o', subTypeConstructor : KalturaPrice, subType : 'KalturaPrice' },
				date : { type : 'n' },
				purchaseId : { type : 'n' },
				subscriptionId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntitlementRenewal',KalturaEntitlementRenewal);
