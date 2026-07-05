
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLoginResponse } from './KalturaLoginResponse';

import { KalturaStringValue } from './KalturaStringValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GoogleIdpLoginActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	idToken : string;
	extraParams? : { [key : string] : KalturaStringValue};
	udid? : string;
}

/**
 * Build request payload for service 'googleIdp' action 'login'.
 *
 * Usage: Login an ottUser (acquire KS) using a Google id token
 *
 * Server response type:         KalturaLoginResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GoogleIdpLoginAction extends KalturaRequest<KalturaLoginResponse> {

    partnerId : number;
	idToken : string;
	extraParams : { [key : string] : KalturaStringValue};
	udid : string;

    constructor(data : GoogleIdpLoginActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLoginResponse', responseConstructor : KalturaLoginResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'googleidp' },
				action : { type : 'c', default : 'login' },
				partnerId : { type : 'n' },
				idToken : { type : 's' },
				extraParams : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				udid : { type : 's' }
            }
        );
        return result;
    }
}

