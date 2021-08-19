
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLoginResponse } from './KalturaLoginResponse';

import { KalturaSocialNetwork } from './KalturaSocialNetwork';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SocialLoginActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	token : string;
	type : KalturaSocialNetwork;
	udid? : string;
	extraParams? : { [key : string] : KalturaStringValue};
}

/**
 * Build request payload for service 'social' action 'login'.
 *
 * Usage: Login using social token
 *
 * Server response type:         KalturaLoginResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SocialLoginAction extends KalturaRequest<KalturaLoginResponse> {

    partnerId : number;
	token : string;
	type : KalturaSocialNetwork;
	udid : string;
	extraParams : { [key : string] : KalturaStringValue};

    constructor(data : SocialLoginActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLoginResponse', responseConstructor : KalturaLoginResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'social' },
				action : { type : 'c', default : 'login' },
				partnerId : { type : 'n' },
				token : { type : 's' },
				type : { type : 'es', subTypeConstructor : KalturaSocialNetwork, subType : 'KalturaSocialNetwork' },
				udid : { type : 's' },
				extraParams : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

