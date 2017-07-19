
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurationGroupDevice } from './KalturaConfigurationGroupDevice';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationGroupDeviceGetActionArgs  extends KalturaRequestArgs {
    udid : string;
}

/** 
* Return the configuration group to which a specific device is associated to
**/
export class ConfigurationGroupDeviceGetAction extends KalturaRequest<KalturaConfigurationGroupDevice> {

    udid : string;

    constructor(data : ConfigurationGroupDeviceGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaConfigurationGroupDevice', responseConstructor : KalturaConfigurationGroupDevice  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'configurationgroupdevice' },
				action : { type : 'c', default : 'get' },
				udid : { type : 's' }
            }
        );
        return result;
    }
}

