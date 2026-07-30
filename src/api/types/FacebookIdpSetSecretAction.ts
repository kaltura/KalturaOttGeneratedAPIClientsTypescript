
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocialSetSecretResponse } from './KalturaSocialSetSecretResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FacebookIdpSetSecretActionArgs  extends KalturaRequestArgs {
    secret : string;
}

/**
 * Build request payload for service 'facebookIdp' action 'setSecret'.
 *
 * Usage: Sets the secret that is shared between Kaltura’s partner (that acts as a service provider) in Facebook (that acts as identity provider) that enables Facebook to identify the partner
 *
 * Server response type:         KalturaSocialSetSecretResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FacebookIdpSetSecretAction extends KalturaRequest<KalturaSocialSetSecretResponse> {

    secret : string;

    constructor(data : FacebookIdpSetSecretActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSocialSetSecretResponse', responseConstructor : KalturaSocialSetSecretResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'facebookidp' },
				action : { type : 'c', default : 'setSecret' },
				secret : { type : 's' }
            }
        );
        return result;
    }
}

