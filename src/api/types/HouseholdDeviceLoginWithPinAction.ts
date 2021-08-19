
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLoginResponse } from './KalturaLoginResponse';

import { KalturaStringValue } from './KalturaStringValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdDeviceLoginWithPinActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	pin : string;
	udid? : string;
	extraParams? : { [key : string] : KalturaStringValue};
}

/**
 * Build request payload for service 'householdDevice' action 'loginWithPin'.
 *
 * Usage: User sign-in via a time-expired sign-in PIN
 *
 * Server response type:         KalturaLoginResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdDeviceLoginWithPinAction extends KalturaRequest<KalturaLoginResponse> {

    partnerId : number;
	pin : string;
	udid : string;
	extraParams : { [key : string] : KalturaStringValue};

    constructor(data : HouseholdDeviceLoginWithPinActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLoginResponse', responseConstructor : KalturaLoginResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householddevice' },
				action : { type : 'c', default : 'loginWithPin' },
				partnerId : { type : 'n' },
				pin : { type : 's' },
				udid : { type : 's' },
				extraParams : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

