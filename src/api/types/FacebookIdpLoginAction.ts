
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLoginResponse } from './KalturaLoginResponse';

import { KalturaStringValue } from './KalturaStringValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FacebookIdpLoginActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	accessToken : string;
	extraParams? : { [key : string] : KalturaStringValue};
	udid? : string;
}

/**
 * Build request payload for service 'facebookIdp' action 'login'.
 *
 * Usage: Login an ottUser (acquire KS) using a Facebook access token
 *
 * Server response type:         KalturaLoginResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FacebookIdpLoginAction extends KalturaRequest<KalturaLoginResponse> {

    partnerId : number;
	accessToken : string;
	extraParams : { [key : string] : KalturaStringValue};
	udid : string;

    constructor(data : FacebookIdpLoginActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLoginResponse', responseConstructor : KalturaLoginResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'facebookidp' },
				action : { type : 'c', default : 'login' },
				partnerId : { type : 'n' },
				accessToken : { type : 's' },
				extraParams : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				udid : { type : 's' }
            }
        );
        return result;
    }
}

