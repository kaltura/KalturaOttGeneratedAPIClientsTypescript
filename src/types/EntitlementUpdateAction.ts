
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntitlement } from './KalturaEntitlement';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntitlementUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	entitlement : KalturaEntitlement;
}

/**
 * Build request payload for service 'entitlement' action 'update'.
 *
 * Usage: Update Kaltura Entitelment by Purchase id
 *
 * Server response type:         KalturaEntitlement
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntitlementUpdateAction extends KalturaRequest<KalturaEntitlement> {

    id : number;
	entitlement : KalturaEntitlement;

    constructor(data : EntitlementUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEntitlement', responseConstructor : KalturaEntitlement  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'entitlement' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				entitlement : { type : 'o', subTypeConstructor : KalturaEntitlement, subType : 'KalturaEntitlement' }
            }
        );
        return result;
    }
}

