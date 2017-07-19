
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdDevice } from './KalturaHouseholdDevice';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdDeviceGetActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Returns device registration status to the supplied household
**/
export class HouseholdDeviceGetAction extends KalturaRequest<KalturaHouseholdDevice> {

    

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
				action : { type : 'c', default : 'get' }
            }
        );
        return result;
    }
}

