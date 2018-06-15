
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurationGroup } from './KalturaConfigurationGroup';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationGroupAddActionArgs  extends KalturaRequestArgs {
    configurationGroup : KalturaConfigurationGroup;
}

/**
 * Build request payload for service 'configurationGroup' action 'add'.
 *
 * Usage: Add a new configuration group
 *
 * Server response type:         KalturaConfigurationGroup
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ConfigurationGroupAddAction extends KalturaRequest<KalturaConfigurationGroup> {

    configurationGroup : KalturaConfigurationGroup;

    constructor(data : ConfigurationGroupAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaConfigurationGroup', responseConstructor : KalturaConfigurationGroup  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'configurationgroup' },
				action : { type : 'c', default : 'add' },
				configurationGroup : { type : 'o', subTypeConstructor : KalturaConfigurationGroup, subType : 'KalturaConfigurationGroup' }
            }
        );
        return result;
    }
}

