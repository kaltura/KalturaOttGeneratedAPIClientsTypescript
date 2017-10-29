
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurationGroup } from './KalturaConfigurationGroup';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationGroupUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	configurationGroup : KalturaConfigurationGroup;
}

/**
 * Build request payload for service 'configurationGroup' action 'update'.
 *
 * Usage: Update configuration group name
 *
 * Server response type:         KalturaConfigurationGroup
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ConfigurationGroupUpdateAction extends KalturaRequest<KalturaConfigurationGroup> {

    id : string;
	configurationGroup : KalturaConfigurationGroup;

    constructor(data : ConfigurationGroupUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 's' },
				configurationGroup : { type : 'o', subTypeConstructor : KalturaConfigurationGroup, subType : 'KalturaConfigurationGroup' }
            }
        );
        return result;
    }
}

