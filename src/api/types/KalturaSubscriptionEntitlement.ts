
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntitlementPriceDetails } from './KalturaEntitlementPriceDetails';
import { KalturaEntitlement, KalturaEntitlementArgs } from './KalturaEntitlement';

export interface KalturaSubscriptionEntitlementArgs  extends KalturaEntitlementArgs {
    paymentGatewayId? : number;
	paymentMethodId? : number;
}


export class KalturaSubscriptionEntitlement extends KalturaEntitlement {

    paymentGatewayId : number;
	paymentMethodId : number;
	readonly scheduledSubscriptionId : number;
	readonly unifiedPaymentId : number;
	readonly isSuspended : boolean;
	readonly priceDetails : KalturaEntitlementPriceDetails;
	readonly isFlexiblePricePlan : boolean;

    constructor(data? : KalturaSubscriptionEntitlementArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscriptionEntitlement' },
				paymentGatewayId : { type : 'n' },
				paymentMethodId : { type : 'n' },
				scheduledSubscriptionId : { type : 'n', readOnly : true },
				unifiedPaymentId : { type : 'n', readOnly : true },
				isSuspended : { type : 'b', readOnly : true },
				priceDetails : { type : 'o', readOnly : true, subTypeConstructor : KalturaEntitlementPriceDetails, subType : 'KalturaEntitlementPriceDetails' },
				isFlexiblePricePlan : { type : 'b', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionEntitlement',KalturaSubscriptionEntitlement);
