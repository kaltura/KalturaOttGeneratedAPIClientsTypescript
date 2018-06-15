
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntitlementRenewal } from './KalturaEntitlementRenewal';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntitlementGetNextRenewalActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'entitlement' action 'getNextRenewal'.
 *
 * Usage: Returns the data about the next renewal
 *
 * Server response type:         KalturaEntitlementRenewal
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntitlementGetNextRenewalAction extends KalturaRequest<KalturaEntitlementRenewal> {

    id : number;

    constructor(data : EntitlementGetNextRenewalActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEntitlementRenewal', responseConstructor : KalturaEntitlementRenewal  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'entitlement' },
				action : { type : 'c', default : 'getNextRenewal' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

