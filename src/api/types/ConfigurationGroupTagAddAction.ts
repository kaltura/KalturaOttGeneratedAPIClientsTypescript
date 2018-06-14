
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurationGroupTag } from './KalturaConfigurationGroupTag';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationGroupTagAddActionArgs  extends KalturaRequestArgs {
    configurationGroupTag : KalturaConfigurationGroupTag;
}

/**
 * Build request payload for service 'configurationGroupTag' action 'add'.
 *
 * Usage: Add a new tag to a configuration group. If this tag is already associated to another group, request fails
 *
 * Server response type:         KalturaConfigurationGroupTag
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ConfigurationGroupTagAddAction extends KalturaRequest<KalturaConfigurationGroupTag> {

    configurationGroupTag : KalturaConfigurationGroupTag;

    constructor(data : ConfigurationGroupTagAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaConfigurationGroupTag', responseConstructor : KalturaConfigurationGroupTag  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'configurationgrouptag' },
				action : { type : 'c', default : 'add' },
				configurationGroupTag : { type : 'o', subTypeConstructor : KalturaConfigurationGroupTag, subType : 'KalturaConfigurationGroupTag' }
            }
        );
        return result;
    }
}

