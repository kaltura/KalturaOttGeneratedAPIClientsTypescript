
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationGroupDeviceDeleteActionArgs  extends KalturaRequestArgs {
    udid : string;
}

/**
 * Build request payload for service 'configurationGroupDevice' action 'delete'.
 *
 * Usage: Remove a device association
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ConfigurationGroupDeviceDeleteAction extends KalturaRequest<boolean> {

    udid : string;

    constructor(data : ConfigurationGroupDeviceDeleteActionArgs)
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
				action : { type : 'c', default : 'delete' },
				udid : { type : 's' }
            }
        );
        return result;
    }
}

