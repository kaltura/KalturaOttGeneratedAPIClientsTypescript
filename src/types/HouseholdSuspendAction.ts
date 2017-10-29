
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdSuspendActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'household' action 'suspend'.
 *
 * Usage: Suspend a given household service. Sets the household status to “suspended&quot;.The household service settings are maintained for later resume
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdSuspendAction extends KalturaRequest<boolean> {

    

    constructor(data? : HouseholdSuspendActionArgs)
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
				action : { type : 'c', default : 'suspend' }
            }
        );
        return result;
    }
}

