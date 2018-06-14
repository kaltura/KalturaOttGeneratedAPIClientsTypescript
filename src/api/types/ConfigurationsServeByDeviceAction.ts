
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface ConfigurationsServeByDeviceActionArgs  extends KalturaFileRequestArgs {
    applicationName : string;
	clientVersion : string;
	platform : string;
	udid : string;
	tag : string;
	partnerId? : number;
}

/**
 * Build request payload for service 'configurations' action 'serveByDevice'.
 *
 * Usage: Return a device configuration applicable for a specific device (UDID), app name, software version, platform and optionally a configuration group’s tag
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaFileRequest
 */
export class ConfigurationsServeByDeviceAction extends KalturaFileRequest {

    applicationName : string;
	clientVersion : string;
	platform : string;
	udid : string;
	tag : string;
	partnerId : number;

    constructor(data : ConfigurationsServeByDeviceActionArgs)
    {
        super(data);
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

