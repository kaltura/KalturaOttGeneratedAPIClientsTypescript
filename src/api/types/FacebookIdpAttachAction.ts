
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocialAttachStatus } from './KalturaSocialAttachStatus';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FacebookIdpAttachActionArgs  extends KalturaRequestArgs {
    accessToken : string;
}

/**
 * Build request payload for service 'facebookIdp' action 'attach'.
 *
 * Usage: Attaches the KS’s ottUser to a Facebook identity. Note: Attempting to attach to an IDP, a user that is already attached to the IDP in question, will fail with the appropriate error
 *
 * Server response type:         KalturaSocialAttachStatus
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class FacebookIdpAttachAction extends KalturaRequest<KalturaSocialAttachStatus> {

    accessToken : string;

    constructor(data : FacebookIdpAttachActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSocialAttachStatus', responseConstructor : KalturaSocialAttachStatus  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'facebookidp' },
				action : { type : 'c', default : 'attach' },
				accessToken : { type : 's' }
            }
        );
        return result;
    }
}

