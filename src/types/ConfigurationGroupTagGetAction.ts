
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurationGroupTag } from './KalturaConfigurationGroupTag';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationGroupTagGetActionArgs  extends KalturaRequestArgs {
    tag : string;
}

/** 
* Return the configuration group the tag is associated to
**/
export class ConfigurationGroupTagGetAction extends KalturaRequest<KalturaConfigurationGroupTag> {

    tag : string;

    constructor(data : ConfigurationGroupTagGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				tag : { type : 's' }
            }
        );
        return result;
    }
}

