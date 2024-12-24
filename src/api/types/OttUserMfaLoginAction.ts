
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLoginResponse } from './KalturaLoginResponse';

import { KalturaStringValue } from './KalturaStringValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserMfaLoginActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	token : string;
	username? : string;
	password? : string;
	extraParams? : { [key : string] : KalturaStringValue};
	udid? : string;
}

/**
 * Build request payload for service 'ottUser' action 'mfaLogin'.
 *
 * Usage: login based on MFA token
 *
 * Server response type:         KalturaLoginResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OttUserMfaLoginAction extends KalturaRequest<KalturaLoginResponse> {

    partnerId : number;
	token : string;
	username : string;
	password : string;
	extraParams : { [key : string] : KalturaStringValue};
	udid : string;

    constructor(data : OttUserMfaLoginActionArgs)
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
				action : { type : 'c', default : 'mfaLogin' },
				partnerId : { type : 'n' },
				token : { type : 's' },
				username : { type : 's' },
				password : { type : 's' },
				extraParams : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				udid : { type : 's' }
            }
        );
        return result;
    }
}

