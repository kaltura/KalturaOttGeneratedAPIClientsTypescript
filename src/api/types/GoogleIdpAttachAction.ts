
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocialAttachStatus } from './KalturaSocialAttachStatus';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GoogleIdpAttachActionArgs  extends KalturaRequestArgs {
    idToken : string;
}

/**
 * Build request payload for service 'googleIdp' action 'attach'.
 *
 * Usage: Attaches the KS’s ottUser to a Google identity. Note: Attempting to attach to an IDP, a user that is already attached to the IDP in question, will fail with the appropriate error
 *
 * Server response type:         KalturaSocialAttachStatus
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GoogleIdpAttachAction extends KalturaRequest<KalturaSocialAttachStatus> {

    idToken : string;

    constructor(data : GoogleIdpAttachActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSocialAttachStatus', responseConstructor : KalturaSocialAttachStatus  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'googleidp' },
				action : { type : 'c', default : 'attach' },
				idToken : { type : 's' }
            }
        );
        return result;
    }
}

