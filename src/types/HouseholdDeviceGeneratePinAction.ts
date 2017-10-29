
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDevicePin } from './KalturaDevicePin';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdDeviceGeneratePinActionArgs  extends KalturaRequestArgs {
    udid : string;
	brandId : number;
}

/**
 * Build request payload for service 'householdDevice' action 'generatePin'.
 *
 * Usage: Generates device pin to use when adding a device to household by pin
 *
 * Server response type:         KalturaDevicePin
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdDeviceGeneratePinAction extends KalturaRequest<KalturaDevicePin> {

    udid : string;
	brandId : number;

    constructor(data : HouseholdDeviceGeneratePinActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDevicePin', responseConstructor : KalturaDevicePin  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householddevice' },
				action : { type : 'c', default : 'generatePin' },
				udid : { type : 's' },
				brandId : { type : 'n' }
            }
        );
        return result;
    }
}

