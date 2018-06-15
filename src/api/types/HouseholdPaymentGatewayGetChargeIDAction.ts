
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPaymentGatewayGetChargeIDActionArgs  extends KalturaRequestArgs {
    paymentGatewayExternalId : string;
}

/**
 * Build request payload for service 'householdPaymentGateway' action 'getChargeID'.
 *
 * Usage: Get a household’s billing account identifier (charge ID) for a given payment gateway
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdPaymentGatewayGetChargeIDAction extends KalturaRequest<string> {

    paymentGatewayExternalId : string;

    constructor(data : HouseholdPaymentGatewayGetChargeIDActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdpaymentgateway' },
				action : { type : 'c', default : 'getChargeID' },
				paymentGatewayExternalId : { type : 's' }
            }
        );
        return result;
    }
}

