
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocialAttachStatus } from './KalturaSocialAttachStatus';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GoogleIdpDetachActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'googleIdp' action 'detach'.
 *
 * Usage: Detaches the KS’s ottUser from the Google identity that he is connected to. Note: Attempting to detach from an IDP, a user that is not attached to the IDP in question, will fail with the appropriate error
 *
 * Server response type:         KalturaSocialAttachStatus
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GoogleIdpDetachAction extends KalturaRequest<KalturaSocialAttachStatus> {

    

    constructor(data? : GoogleIdpDetachActionArgs)
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
				action : { type : 'c', default : 'detach' }
            }
        );
        return result;
    }
}

