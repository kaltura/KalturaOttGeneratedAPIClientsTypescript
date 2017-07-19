
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurationGroupTagListResponse } from './KalturaConfigurationGroupTagListResponse';

import { KalturaConfigurationGroupTagFilter } from './KalturaConfigurationGroupTagFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationGroupTagListActionArgs  extends KalturaRequestArgs {
    filter : KalturaConfigurationGroupTagFilter;
}

/** 
* Return list of tags for a configuration group
**/
export class ConfigurationGroupTagListAction extends KalturaRequest<KalturaConfigurationGroupTagListResponse> {

    filter : KalturaConfigurationGroupTagFilter;

    constructor(data : ConfigurationGroupTagListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaConfigurationGroupTagListResponse', responseConstructor : KalturaConfigurationGroupTagListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'configurationgrouptag' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaConfigurationGroupTagFilter, subType : 'KalturaConfigurationGroupTagFilter' }
            }
        );
        return result;
    }
}

