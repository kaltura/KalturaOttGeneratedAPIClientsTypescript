
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPaymentGatewayProfile } from './KalturaPaymentGatewayProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PaymentGatewayProfileUpdateActionArgs  extends KalturaRequestArgs {
    paymentGatewayId : number;
	paymentGateway : KalturaPaymentGatewayProfile;
}

/** 
* Update payment gateway details
**/
export class PaymentGatewayProfileUpdateAction extends KalturaRequest<KalturaPaymentGatewayProfile> {

    paymentGatewayId : number;
	paymentGateway : KalturaPaymentGatewayProfile;

    constructor(data : PaymentGatewayProfileUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPaymentGatewayProfile', responseConstructor : KalturaPaymentGatewayProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'paymentgatewayprofile' },
				action : { type : 'c', default : 'update' },
				paymentGatewayId : { type : 'n' },
				paymentGateway : { type : 'o', subTypeConstructor : KalturaPaymentGatewayProfile, subType : 'KalturaPaymentGatewayProfile' }
            }
        );
        return result;
    }
}

