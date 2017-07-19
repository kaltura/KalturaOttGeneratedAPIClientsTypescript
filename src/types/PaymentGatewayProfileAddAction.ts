
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPaymentGatewayProfile } from './KalturaPaymentGatewayProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PaymentGatewayProfileAddActionArgs  extends KalturaRequestArgs {
    paymentGateway : KalturaPaymentGatewayProfile;
}

/** 
* Insert new payment gateway for partner
**/
export class PaymentGatewayProfileAddAction extends KalturaRequest<KalturaPaymentGatewayProfile> {

    paymentGateway : KalturaPaymentGatewayProfile;

    constructor(data : PaymentGatewayProfileAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				paymentGateway : { type : 'o', subTypeConstructor : KalturaPaymentGatewayProfile, subType : 'KalturaPaymentGatewayProfile' }
            }
        );
        return result;
    }
}

