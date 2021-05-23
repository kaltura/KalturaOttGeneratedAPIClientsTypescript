
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdLimitationsDeleteActionArgs  extends KalturaRequestArgs {
    householdLimitationsId : number;
}

/**
 * Build request payload for service 'householdLimitations' action 'delete'.
 *
 * Usage: Delete household limitation
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdLimitationsDeleteAction extends KalturaRequest<boolean> {

    householdLimitationsId : number;

    constructor(data : HouseholdLimitationsDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdlimitations' },
				action : { type : 'c', default : 'delete' },
				householdLimitationsId : { type : 'n' }
            }
        );
        return result;
    }
}

