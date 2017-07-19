
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPaymentGatewaySetChargeIDActionArgs  extends KalturaRequestArgs {
    paymentGatewayExternalId : string;
	chargeId : string;
}

/** 
* Set user billing account identifier (charge ID), for a specific household and a
* specific payment gateway
**/
export class HouseholdPaymentGatewaySetChargeIDAction extends KalturaRequest<boolean> {

    paymentGatewayExternalId : string;
	chargeId : string;

    constructor(data : HouseholdPaymentGatewaySetChargeIDActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdpaymentgateway' },
				action : { type : 'c', default : 'setChargeID' },
				paymentGatewayExternalId : { type : 's' },
				chargeId : { type : 's' }
            }
        );
        return result;
    }
}

