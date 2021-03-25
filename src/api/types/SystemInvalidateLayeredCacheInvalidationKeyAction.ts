
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SystemInvalidateLayeredCacheInvalidationKeyActionArgs  extends KalturaRequestArgs {
    key : string;
}

/**
 * Build request payload for service 'system' action 'invalidateLayeredCacheInvalidationKey'.
 *
 * Usage: Returns true if the invalidation key was invalidated successfully or false otherwise
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SystemInvalidateLayeredCacheInvalidationKeyAction extends KalturaRequest<boolean> {

    key : string;

    constructor(data : SystemInvalidateLayeredCacheInvalidationKeyActionArgs)
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
				action : { type : 'c', default : 'invalidateLayeredCacheInvalidationKey' },
				key : { type : 's' }
            }
        );
        return result;
    }
}

