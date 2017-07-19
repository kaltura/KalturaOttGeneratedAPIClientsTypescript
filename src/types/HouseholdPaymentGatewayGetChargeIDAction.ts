
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPaymentGatewayGetChargeIDActionArgs  extends KalturaRequestArgs {
    paymentGatewayExternalId : string;
}

/** 
* Get a household’s billing account identifier (charge ID) for a given payment
* gateway
**/
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

