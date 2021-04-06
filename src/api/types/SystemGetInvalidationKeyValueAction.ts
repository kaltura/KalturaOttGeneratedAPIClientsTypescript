
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLongValue } from './KalturaLongValue';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SystemGetInvalidationKeyValueActionArgs  extends KalturaRequestArgs {
    invalidationKey : string;
	layeredCacheConfigName? : string;
	groupId? : number;
}

/**
 * Build request payload for service 'system' action 'getInvalidationKeyValue'.
 *
 * Usage: Returns the epoch value of an invalidation key if it was found
 *
 * Server response type:         KalturaLongValue
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SystemGetInvalidationKeyValueAction extends KalturaRequest<KalturaLongValue> {

    invalidationKey : string;
	layeredCacheConfigName : string;
	groupId : number;

    constructor(data : SystemGetInvalidationKeyValueActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLongValue', responseConstructor : KalturaLongValue  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'system' },
				action : { type : 'c', default : 'getInvalidationKeyValue' },
				invalidationKey : { type : 's' },
				layeredCacheConfigName : { type : 's' },
				groupId : { type : 'n' }
            }
        );
        return result;
    }
}

