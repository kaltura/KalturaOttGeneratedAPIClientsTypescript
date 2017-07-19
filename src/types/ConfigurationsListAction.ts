
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurationsListResponse } from './KalturaConfigurationsListResponse';

import { KalturaConfigurationsFilter } from './KalturaConfigurationsFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationsListActionArgs  extends KalturaRequestArgs {
    filter : KalturaConfigurationsFilter;
}

/** 
* Return a list of device configurations of a configuration group
**/
export class ConfigurationsListAction extends KalturaRequest<KalturaConfigurationsListResponse> {

    filter : KalturaConfigurationsFilter;

    constructor(data : ConfigurationsListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaConfigurationsListResponse', responseConstructor : KalturaConfigurationsListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'configurations' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaConfigurationsFilter, subType : 'KalturaConfigurationsFilter' }
            }
        );
        return result;
    }
}

