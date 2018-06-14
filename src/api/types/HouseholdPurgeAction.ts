
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdPurgeActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'household' action 'purge'.
 *
 * Usage: Purge a household. Delete all of the household information, including users, devices, entitlements, payment methods and notification date
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdPurgeAction extends KalturaRequest<boolean> {

    id : number;

    constructor(data : HouseholdPurgeActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'household' },
				action : { type : 'c', default : 'purge' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

