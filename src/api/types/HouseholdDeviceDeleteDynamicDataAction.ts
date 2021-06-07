
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdDeviceDeleteDynamicDataActionArgs  extends KalturaRequestArgs {
    udid : string;
	key : string;
}

/**
 * Build request payload for service 'householdDevice' action 'deleteDynamicData'.
 *
 * Usage: Deletes dynamic data item with key  for device with identifier
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdDeviceDeleteDynamicDataAction extends KalturaRequest<boolean> {

    udid : string;
	key : string;

    constructor(data : HouseholdDeviceDeleteDynamicDataActionArgs)
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
				action : { type : 'c', default : 'deleteDynamicData' },
				udid : { type : 's' },
				key : { type : 's' }
            }
        );
        return result;
    }
}

