
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLoginResponse } from './KalturaLoginResponse';

import { KalturaStringValue } from './KalturaStringValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserLoginWithPinActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	pin : string;
	udid? : string;
	secret? : string;
	extraParams? : { [key : string] : KalturaStringValue};
}

/**
 * Build request payload for service 'ottUser' action 'loginWithPin'.
 *
 * Usage: User sign-in via a time-expired sign-in PIN
 *
 * Server response type:         KalturaLoginResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OttUserLoginWithPinAction extends KalturaRequest<KalturaLoginResponse> {

    partnerId : number;
	pin : string;
	udid : string;
	secret : string;
	extraParams : { [key : string] : KalturaStringValue};

    constructor(data : OttUserLoginWithPinActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLoginResponse', responseConstructor : KalturaLoginResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottuser' },
				action : { type : 'c', default : 'loginWithPin' },
				partnerId : { type : 'n' },
				pin : { type : 's' },
				udid : { type : 's' },
				secret : { type : 's' },
				extraParams : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

