
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurations } from './KalturaConfigurations';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationsUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	configurations : KalturaConfigurations;
}

/**
 * Build request payload for service 'configurations' action 'update'.
 *
 * Usage: Update device configuration
 *
 * Server response type:         KalturaConfigurations
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ConfigurationsUpdateAction extends KalturaRequest<KalturaConfigurations> {

    id : string;
	configurations : KalturaConfigurations;

    constructor(data : ConfigurationsUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaConfigurations', responseConstructor : KalturaConfigurations  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'configurations' },
				action : { type : 'c', default : 'update' },
				id : { type : 's' },
				configurations : { type : 'o', subTypeConstructor : KalturaConfigurations, subType : 'KalturaConfigurations' }
            }
        );
        return result;
    }
}

