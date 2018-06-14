
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLoginSession } from './KalturaLoginSession';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserAnonymousLoginActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	udid? : string;
}

/**
 * Build request payload for service 'ottUser' action 'anonymousLogin'.
 *
 * Usage: Returns tokens (KS and refresh token) for anonymous access
 *
 * Server response type:         KalturaLoginSession
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OttUserAnonymousLoginAction extends KalturaRequest<KalturaLoginSession> {

    partnerId : number;
	udid : string;

    constructor(data : OttUserAnonymousLoginActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLoginSession', responseConstructor : KalturaLoginSession  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottuser' },
				action : { type : 'c', default : 'anonymousLogin' },
				partnerId : { type : 'n' },
				udid : { type : 's' }
            }
        );
        return result;
    }
}

