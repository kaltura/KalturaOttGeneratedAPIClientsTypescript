
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntitlementCancelRenewalActionArgs  extends KalturaRequestArgs {
    subscriptionId : string;
}

/**
 * Build request payload for service 'entitlement' action 'cancelRenewal'.
 *
 * Usage: Cancel a household service subscription at the next renewal. The subscription stays valid till the next renewal
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntitlementCancelRenewalAction extends KalturaRequest<void> {

    subscriptionId : string;

    constructor(data : EntitlementCancelRenewalActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'entitlement' },
				action : { type : 'c', default : 'cancelRenewal' },
				subscriptionId : { type : 's' }
            }
        );
        return result;
    }
}

