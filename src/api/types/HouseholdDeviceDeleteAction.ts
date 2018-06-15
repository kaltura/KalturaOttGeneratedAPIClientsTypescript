
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdDeviceDeleteActionArgs  extends KalturaRequestArgs {
    udid : string;
}

/**
 * Build request payload for service 'householdDevice' action 'delete'.
 *
 * Usage: Removes a device from household
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdDeviceDeleteAction extends KalturaRequest<boolean> {

    udid : string;

    constructor(data : HouseholdDeviceDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householddevice' },
				action : { type : 'c', default : 'delete' },
				udid : { type : 's' }
            }
        );
        return result;
    }
}

