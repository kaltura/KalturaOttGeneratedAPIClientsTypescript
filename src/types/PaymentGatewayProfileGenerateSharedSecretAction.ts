
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPaymentGatewayProfile } from './KalturaPaymentGatewayProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PaymentGatewayProfileGenerateSharedSecretActionArgs  extends KalturaRequestArgs {
    paymentGatewayId : number;
}

/** 
* Generate payment gateway shared secret
**/
export class PaymentGatewayProfileGenerateSharedSecretAction extends KalturaRequest<KalturaPaymentGatewayProfile> {

    paymentGatewayId : number;

    constructor(data : PaymentGatewayProfileGenerateSharedSecretActionArgs)
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
				action : { type : 'c', default : 'generateSharedSecret' },
				paymentGatewayId : { type : 'n' }
            }
        );
        return result;
    }
}

