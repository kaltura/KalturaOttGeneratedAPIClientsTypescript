
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdDevice } from './KalturaHouseholdDevice';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdDeviceUpdateActionArgs  extends KalturaRequestArgs {
    udid : string;
	device : KalturaHouseholdDevice;
}

/**
 * Build request payload for service 'householdDevice' action 'update'.
 *
 * Usage: Update the name of the device by UDID
 *
 * Server response type:         KalturaHouseholdDevice
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdDeviceUpdateAction extends KalturaRequest<KalturaHouseholdDevice> {

    udid : string;
	device : KalturaHouseholdDevice;

    constructor(data : HouseholdDeviceUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				udid : { type : 's' },
				device : { type : 'o', subTypeConstructor : KalturaHouseholdDevice, subType : 'KalturaHouseholdDevice' }
            }
        );
        return result;
    }
}

