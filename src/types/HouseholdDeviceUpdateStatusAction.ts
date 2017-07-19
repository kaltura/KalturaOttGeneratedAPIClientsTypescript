
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaDeviceStatus } from './KalturaDeviceStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdDeviceUpdateStatusActionArgs  extends KalturaRequestArgs {
    udid : string;
	status : KalturaDeviceStatus;
}

/** 
* Update the name of the device by UDID
**/
export class HouseholdDeviceUpdateStatusAction extends KalturaRequest<boolean> {

    udid : string;
	status : KalturaDeviceStatus;

    constructor(data : HouseholdDeviceUpdateStatusActionArgs)
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
				action : { type : 'c', default : 'updateStatus' },
				udid : { type : 's' },
				status : { type : 'es', subTypeConstructor : KalturaDeviceStatus, subType : 'KalturaDeviceStatus' }
            }
        );
        return result;
    }
}

