
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPaymentMethodProfileListResponse } from './KalturaPaymentMethodProfileListResponse';

import { KalturaPaymentMethodProfileFilter } from './KalturaPaymentMethodProfileFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PaymentMethodProfileListActionArgs  extends KalturaRequestArgs {
    filter : KalturaPaymentMethodProfileFilter;
}

/**
 * Build request payload for service 'paymentMethodProfile' action 'list'.
 *
 * Usage: TBD
 *
 * Server response type:         KalturaPaymentMethodProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PaymentMethodProfileListAction extends KalturaRequest<KalturaPaymentMethodProfileListResponse> {

    filter : KalturaPaymentMethodProfileFilter;

    constructor(data : PaymentMethodProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPaymentMethodProfileListResponse', responseConstructor : KalturaPaymentMethodProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'paymentmethodprofile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaPaymentMethodProfileFilter, subType : 'KalturaPaymentMethodProfileFilter' }
            }
        );
        return result;
    }
}

