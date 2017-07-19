
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdDevice } from './KalturaHouseholdDevice';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdDeviceAddActionArgs  extends KalturaRequestArgs {
    device : KalturaHouseholdDevice;
}

/** 
* Add device to household
**/
export class HouseholdDeviceAddAction extends KalturaRequest<KalturaHouseholdDevice> {

    device : KalturaHouseholdDevice;

    constructor(data : HouseholdDeviceAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				device : { type : 'o', subTypeConstructor : KalturaHouseholdDevice, subType : 'KalturaHouseholdDevice' }
            }
        );
        return result;
    }
}

