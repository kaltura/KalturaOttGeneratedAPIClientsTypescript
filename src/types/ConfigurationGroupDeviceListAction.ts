
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurationGroupDeviceListResponse } from './KalturaConfigurationGroupDeviceListResponse';

import { KalturaConfigurationGroupDeviceFilter } from './KalturaConfigurationGroupDeviceFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationGroupDeviceListActionArgs  extends KalturaRequestArgs {
    filter : KalturaConfigurationGroupDeviceFilter;
	pager? : KalturaFilterPager;
}

/** 
* Return the list of associated devices for a given configuration group
**/
export class ConfigurationGroupDeviceListAction extends KalturaRequest<KalturaConfigurationGroupDeviceListResponse> {

    filter : KalturaConfigurationGroupDeviceFilter;
	pager : KalturaFilterPager;

    constructor(data : ConfigurationGroupDeviceListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaConfigurationGroupDeviceListResponse', responseConstructor : KalturaConfigurationGroupDeviceListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'configurationgroupdevice' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaConfigurationGroupDeviceFilter, subType : 'KalturaConfigurationGroupDeviceFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

