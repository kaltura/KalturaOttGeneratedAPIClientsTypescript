
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SystemClearLocalServerCacheActionArgs  extends KalturaRequestArgs {
    action? : string;
	key? : string;
}

/**
 * Build request payload for service 'system' action 'clearLocalServerCache'.
 *
 * Usage: Clear local server cache
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SystemClearLocalServerCacheAction extends KalturaRequest<boolean> {

    action : string;
	key : string;

    constructor(data? : SystemClearLocalServerCacheActionArgs)
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
				action : { type : 'c', default : 'clearLocalServerCache' },
				action : { type : 's' },
				key : { type : 's' }
            }
        );
        return result;
    }
}

