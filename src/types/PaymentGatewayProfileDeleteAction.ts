
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PaymentGatewayProfileDeleteActionArgs  extends KalturaRequestArgs {
    paymentGatewayId : number;
}

/** 
* Delete payment gateway by payment gateway id
**/
export class PaymentGatewayProfileDeleteAction extends KalturaRequest<boolean> {

    paymentGatewayId : number;

    constructor(data : PaymentGatewayProfileDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'paymentgatewayprofile' },
				action : { type : 'c', default : 'delete' },
				paymentGatewayId : { type : 'n' }
            }
        );
        return result;
    }
}

