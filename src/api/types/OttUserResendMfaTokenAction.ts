
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResendMfaTokenResponse } from './KalturaResendMfaTokenResponse';

import { KalturaStringValue } from './KalturaStringValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserResendMfaTokenActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	username? : string;
	password? : string;
	extraParams? : { [key : string] : KalturaStringValue};
}

/**
 * Build request payload for service 'ottUser' action 'resendMfaToken'.
 *
 * Usage: resend MFA Token for the user
 *
 * Server response type:         KalturaResendMfaTokenResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OttUserResendMfaTokenAction extends KalturaRequest<KalturaResendMfaTokenResponse> {

    partnerId : number;
	username : string;
	password : string;
	extraParams : { [key : string] : KalturaStringValue};

    constructor(data : OttUserResendMfaTokenActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaResendMfaTokenResponse', responseConstructor : KalturaResendMfaTokenResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottuser' },
				action : { type : 'c', default : 'resendMfaToken' },
				partnerId : { type : 'n' },
				username : { type : 's' },
				password : { type : 's' },
				extraParams : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

