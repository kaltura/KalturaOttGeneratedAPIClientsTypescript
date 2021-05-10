
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUsageModuleListResponse } from './KalturaUsageModuleListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UsageModuleListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'usageModule' action 'list'.
 *
 * Usage: Internal API !!! Returns the list of available usage module
 *
 * Server response type:         KalturaUsageModuleListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UsageModuleListAction extends KalturaRequest<KalturaUsageModuleListResponse> {

    

    constructor(data? : UsageModuleListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUsageModuleListResponse', responseConstructor : KalturaUsageModuleListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'usagemodule' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

