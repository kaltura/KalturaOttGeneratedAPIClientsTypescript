
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurationGroupListResponse } from './KalturaConfigurationGroupListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationGroupListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'configurationGroup' action 'list'.
 *
 * Usage: Return the list of configuration groups
 *
 * Server response type:         KalturaConfigurationGroupListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ConfigurationGroupListAction extends KalturaRequest<KalturaConfigurationGroupListResponse> {

    

    constructor(data? : ConfigurationGroupListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaConfigurationGroupListResponse', responseConstructor : KalturaConfigurationGroupListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'configurationgroup' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

