
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurationGroup } from './KalturaConfigurationGroup';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationGroupGetActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Return the configuration group details, including group identifiers, tags, and
* number of associated devices, and list of device configuration
**/
export class ConfigurationGroupGetAction extends KalturaRequest<KalturaConfigurationGroup> {

    id : string;

    constructor(data : ConfigurationGroupGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

