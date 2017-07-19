
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PaymentMethodProfileDeleteActionArgs  extends KalturaRequestArgs {
    paymentMethodId : number;
}

/** 
* Delete payment method profile
**/
export class PaymentMethodProfileDeleteAction extends KalturaRequest<boolean> {

    paymentMethodId : number;

    constructor(data : PaymentMethodProfileDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'paymentmethodprofile' },
				action : { type : 'c', default : 'delete' },
				paymentMethodId : { type : 'n' }
            }
        );
        return result;
    }
}

