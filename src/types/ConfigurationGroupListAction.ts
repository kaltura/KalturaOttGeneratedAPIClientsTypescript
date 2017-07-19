
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurationGroupListResponse } from './KalturaConfigurationGroupListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationGroupListActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Return the list of configuration groups
**/
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

