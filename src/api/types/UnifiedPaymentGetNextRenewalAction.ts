
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUnifiedPaymentRenewal } from './KalturaUnifiedPaymentRenewal';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UnifiedPaymentGetNextRenewalActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'unifiedPayment' action 'getNextRenewal'.
 *
 * Usage: Returns the data about the next renewal
 *
 * Server response type:         KalturaUnifiedPaymentRenewal
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UnifiedPaymentGetNextRenewalAction extends KalturaRequest<KalturaUnifiedPaymentRenewal> {

    id : number;

    constructor(data : UnifiedPaymentGetNextRenewalActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUnifiedPaymentRenewal', responseConstructor : KalturaUnifiedPaymentRenewal  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'unifiedpayment' },
				action : { type : 'c', default : 'getNextRenewal' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

