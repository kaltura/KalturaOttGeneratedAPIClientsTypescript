
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdLimitationsIsUsedActionArgs  extends KalturaRequestArgs {
    dlmId : number;
}

/**
 * Build request payload for service 'householdLimitations' action 'isUsed'.
 *
 * Usage: Checks if the DLM is used
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdLimitationsIsUsedAction extends KalturaRequest<boolean> {

    dlmId : number;

    constructor(data : HouseholdLimitationsIsUsedActionArgs)
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
				action : { type : 'c', default : 'isUsed' },
				dlmId : { type : 'n' }
            }
        );
        return result;
    }
}

