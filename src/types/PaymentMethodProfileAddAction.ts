
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPaymentMethodProfile } from './KalturaPaymentMethodProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PaymentMethodProfileAddActionArgs  extends KalturaRequestArgs {
    paymentMethod : KalturaPaymentMethodProfile;
}

/** 
* TBD
**/
export class PaymentMethodProfileAddAction extends KalturaRequest<KalturaPaymentMethodProfile> {

    paymentMethod : KalturaPaymentMethodProfile;

    constructor(data : PaymentMethodProfileAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				paymentMethod : { type : 'o', subTypeConstructor : KalturaPaymentMethodProfile, subType : 'KalturaPaymentMethodProfile' }
            }
        );
        return result;
    }
}

