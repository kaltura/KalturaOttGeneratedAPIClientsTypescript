
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDevicePin } from './KalturaDevicePin';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdDeviceGeneratePinActionArgs  extends KalturaRequestArgs {
    udid : string;
	brandId : number;
}

/** 
* Generates device pin to use when adding a device to household by pin
**/
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

