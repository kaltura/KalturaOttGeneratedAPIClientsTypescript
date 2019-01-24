
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntitlement, KalturaEntitlementArgs } from './KalturaEntitlement';

export interface KalturaSubscriptionEntitlementArgs  extends KalturaEntitlementArgs {
    paymentGatewayId? : number;
	paymentMethodId? : number;
	scheduledSubscriptionId? : number;
	unifiedPaymentId? : number;
}


export class KalturaSubscriptionEntitlement extends KalturaEntitlement {

    readonly nextRenewalDate : number;
	readonly isRenewableForPurchase : boolean;
	readonly isRenewable : boolean;
	readonly isInGracePeriod : boolean;
	paymentGatewayId : number;
	paymentMethodId : number;
	scheduledSubscriptionId : number;
	unifiedPaymentId : number;
	readonly isSuspended : boolean;

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
				nextRenewalDate : { type : 'n', readOnly : true },
				isRenewableForPurchase : { type : 'b', readOnly : true },
				isRenewable : { type : 'b', readOnly : true },
				isInGracePeriod : { type : 'b', readOnly : true },
				paymentGatewayId : { type : 'n' },
				paymentMethodId : { type : 'n' },
				scheduledSubscriptionId : { type : 'n' },
				unifiedPaymentId : { type : 'n' },
				isSuspended : { type : 'b', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscriptionEntitlement',KalturaSubscriptionEntitlement);
