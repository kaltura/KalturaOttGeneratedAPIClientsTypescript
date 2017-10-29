
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPaymentGatewayProfile } from './KalturaPaymentGatewayProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PaymentGatewayProfileGenerateSharedSecretActionArgs  extends KalturaRequestArgs {
    paymentGatewayId : number;
}

/**
 * Build request payload for service 'paymentGatewayProfile' action 'generateSharedSecret'.
 *
 * Usage: Generate payment gateway shared secret
 *
 * Server response type:         KalturaPaymentGatewayProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
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

