
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdDevice } from './KalturaHouseholdDevice';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdDeviceAddByPinActionArgs  extends KalturaRequestArgs {
    deviceName : string;
	pin : string;
}

/**
 * Build request payload for service 'householdDevice' action 'addByPin'.
 *
 * Usage: Registers a device to a household using pin code
 *
 * Server response type:         KalturaHouseholdDevice
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdDeviceAddByPinAction extends KalturaRequest<KalturaHouseholdDevice> {

    deviceName : string;
	pin : string;

    constructor(data : HouseholdDeviceAddByPinActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHouseholdDevice', responseConstructor : KalturaHouseholdDevice  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householddevice' },
				action : { type : 'c', default : 'addByPin' },
				deviceName : { type : 's' },
				pin : { type : 's' }
            }
        );
        return result;
    }
}

