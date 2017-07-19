
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdDeviceDeleteActionArgs  extends KalturaRequestArgs {
    udid : string;
}

/** 
* Removes a device from household
**/
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

