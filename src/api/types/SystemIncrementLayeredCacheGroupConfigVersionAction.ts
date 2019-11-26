
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SystemIncrementLayeredCacheGroupConfigVersionActionArgs  extends KalturaRequestArgs {
    groupId? : number;
}

/**
 * Build request payload for service 'system' action 'incrementLayeredCacheGroupConfigVersion'.
 *
 * Usage: Returns true if version has been incremented successfully or false otherwise. You need to send groupId only if you wish to increment for a specific groupId and not the one the KS belongs to
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SystemIncrementLayeredCacheGroupConfigVersionAction extends KalturaRequest<boolean> {

    groupId : number;

    constructor(data? : SystemIncrementLayeredCacheGroupConfigVersionActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'system' },
				action : { type : 'c', default : 'incrementLayeredCacheGroupConfigVersion' },
				groupId : { type : 'n' }
            }
        );
        return result;
    }
}

