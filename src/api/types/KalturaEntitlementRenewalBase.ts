
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEntitlementRenewalBaseArgs  extends KalturaObjectBaseArgs {
    price? : number;
	purchaseId? : number;
	subscriptionId? : number;
}


export class KalturaEntitlementRenewalBase extends KalturaObjectBase {

    price : number;
	purchaseId : number;
	subscriptionId : number;

    constructor(data? : KalturaEntitlementRenewalBaseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntitlementRenewalBase' },
				price : { type : 'n' },
				purchaseId : { type : 'n' },
				subscriptionId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntitlementRenewalBase',KalturaEntitlementRenewalBase);
