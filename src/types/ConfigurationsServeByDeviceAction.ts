
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConfigurationsServeByDeviceActionArgs  extends KalturaRequestArgs {
    applicationName : string;
	clientVersion : string;
	platform : string;
	udid : string;
	tag : string;
	partnerId? : number;
}

/** 
* Return a device configuration applicable for a specific device (UDID), app name,
* software version, platform and optionally a configuration group’s tag
**/
export class ConfigurationsServeByDeviceAction extends KalturaRequest<string> {

    applicationName : string;
	clientVersion : string;
	platform : string;
	udid : string;
	tag : string;
	partnerId : number;

    constructor(data : ConfigurationsServeByDeviceActionArgs)
    {
        super(data, {responseType : 'f', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'configurations' },
				action : { type : 'c', default : 'serveByDevice' },
				applicationName : { type : 's' },
				clientVersion : { type : 's' },
				platform : { type : 's' },
				udid : { type : 's' },
				tag : { type : 's' },
				partnerId : { type : 'n' }
            }
        );
        return result;
    }
}

