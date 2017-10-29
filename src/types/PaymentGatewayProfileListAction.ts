
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPaymentGatewayProfileListResponse } from './KalturaPaymentGatewayProfileListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PaymentGatewayProfileListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'paymentGatewayProfile' action 'list'.
 *
 * Usage: Returns all payment gateways for partner : id + name
 *
 * Server response type:         KalturaPaymentGatewayProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PaymentGatewayProfileListAction extends KalturaRequest<KalturaPaymentGatewayProfileListResponse> {

    

    constructor(data? : PaymentGatewayProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPaymentGatewayProfileListResponse', responseConstructor : KalturaPaymentGatewayProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'paymentgatewayprofile' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

