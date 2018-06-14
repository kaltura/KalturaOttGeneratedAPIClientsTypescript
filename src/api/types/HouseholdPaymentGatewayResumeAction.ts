
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPaymentGatewayResumeActionArgs  extends KalturaRequestArgs {
    paymentGatewayId : number;
}

/**
 * Build request payload for service 'householdPaymentGateway' action 'resume'.
 *
 * Usage: Resumes all the entitlements of the given payment gateway
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdPaymentGatewayResumeAction extends KalturaRequest<void> {

    paymentGatewayId : number;

    constructor(data : HouseholdPaymentGatewayResumeActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdpaymentgateway' },
				action : { type : 'c', default : 'resume' },
				paymentGatewayId : { type : 'n' }
            }
        );
        return result;
    }
}

