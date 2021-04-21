
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SystemGetLogLevelActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'system' action 'getLogLevel'.
 *
 * Usage: Gets the current level of the KLogger
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SystemGetLogLevelAction extends KalturaRequest<string> {

    

    constructor(data? : SystemGetLogLevelActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'system' },
				action : { type : 'c', default : 'getLogLevel' }
            }
        );
        return result;
    }
}

