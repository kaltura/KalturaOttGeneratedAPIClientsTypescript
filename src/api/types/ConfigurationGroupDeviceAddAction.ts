
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaConfigurationGroupDevice } from './KalturaConfigurationGroupDevice';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationGroupDeviceAddActionArgs  extends KalturaRequestArgs {
    configurationGroupDevice : KalturaConfigurationGroupDevice;
}

/**
 * Build request payload for service 'configurationGroupDevice' action 'add'.
 *
 * Usage: Associate a collection of devices to a configuration group. If a device is already associated to another group – old association is replaced
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ConfigurationGroupDeviceAddAction extends KalturaRequest<boolean> {

    configurationGroupDevice : KalturaConfigurationGroupDevice;

    constructor(data : ConfigurationGroupDeviceAddActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'configurationgroupdevice' },
				action : { type : 'c', default : 'add' },
				configurationGroupDevice : { type : 'o', subTypeConstructor : KalturaConfigurationGroupDevice, subType : 'KalturaConfigurationGroupDevice' }
            }
        );
        return result;
    }
}

