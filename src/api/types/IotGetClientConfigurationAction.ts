
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIotClientConfiguration } from './KalturaIotClientConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IotGetClientConfigurationActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'iot' action 'getClientConfiguration'.
 *
 * Usage: Get iot Client Configuration
 *
 * Server response type:         KalturaIotClientConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IotGetClientConfigurationAction extends KalturaRequest<KalturaIotClientConfiguration> {

    

    constructor(data? : IotGetClientConfigurationActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaIotClientConfiguration', responseConstructor : KalturaIotClientConfiguration  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'iot' },
				action : { type : 'c', default : 'getClientConfiguration' }
            }
        );
        return result;
    }
}

