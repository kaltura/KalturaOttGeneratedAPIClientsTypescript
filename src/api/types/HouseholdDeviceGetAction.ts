
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdDevice } from './KalturaHouseholdDevice';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdDeviceGetActionArgs  extends KalturaRequestArgs {
    udid? : string;
}

/**
 * Build request payload for service 'householdDevice' action 'get'.
 *
 * Usage: Returns device registration status to the supplied household
 *
 * Server response type:         KalturaHouseholdDevice
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdDeviceGetAction extends KalturaRequest<KalturaHouseholdDevice> {

    udid : string;

    constructor(data? : HouseholdDeviceGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				udid : { type : 's' }
            }
        );
        return result;
    }
}

