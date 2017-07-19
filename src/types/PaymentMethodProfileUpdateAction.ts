
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPaymentMethodProfile } from './KalturaPaymentMethodProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PaymentMethodProfileUpdateActionArgs  extends KalturaRequestArgs {
    paymentMethodId : number;
	paymentMethod : KalturaPaymentMethodProfile;
}

/** 
* Update payment method
**/
export class PaymentMethodProfileUpdateAction extends KalturaRequest<KalturaPaymentMethodProfile> {

    paymentMethodId : number;
	paymentMethod : KalturaPaymentMethodProfile;

    constructor(data : PaymentMethodProfileUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPaymentMethodProfile', responseConstructor : KalturaPaymentMethodProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'paymentmethodprofile' },
				action : { type : 'c', default : 'update' },
				paymentMethodId : { type : 'n' },
				paymentMethod : { type : 'o', subTypeConstructor : KalturaPaymentMethodProfile, subType : 'KalturaPaymentMethodProfile' }
            }
        );
        return result;
    }
}

