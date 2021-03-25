
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SystemGetLayeredCacheGroupConfigActionArgs  extends KalturaRequestArgs {
    groupId? : number;
}

/**
 * Build request payload for service 'system' action 'getLayeredCacheGroupConfig'.
 *
 * Usage: Returns the current layered cache group config of the sent groupId. You need to send groupId only if you wish to get it for a specific groupId and not the one the KS belongs to
 *
 * Server response type:         KalturaStringValue
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SystemGetLayeredCacheGroupConfigAction extends KalturaRequest<KalturaStringValue> {

    groupId : number;

    constructor(data? : SystemGetLayeredCacheGroupConfigActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaStringValue', responseConstructor : KalturaStringValue  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'system' },
				action : { type : 'c', default : 'getLayeredCacheGroupConfig' },
				groupId : { type : 'n' }
            }
        );
        return result;
    }
}

