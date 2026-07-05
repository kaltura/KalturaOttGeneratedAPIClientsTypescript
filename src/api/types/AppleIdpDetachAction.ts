
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocialAttachStatus } from './KalturaSocialAttachStatus';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AppleIdpDetachActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'appleIdp' action 'detach'.
 *
 * Usage: Detaches the KS’s ottUser from the Apple identity that he is connected to. Note: Attempting to detach from an IDP, a user that is not attached to the IDP in question, will fail with the appropriate error
 *
 * Server response type:         KalturaSocialAttachStatus
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AppleIdpDetachAction extends KalturaRequest<KalturaSocialAttachStatus> {

    

    constructor(data? : AppleIdpDetachActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSocialAttachStatus', responseConstructor : KalturaSocialAttachStatus  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'appleidp' },
				action : { type : 'c', default : 'detach' }
            }
        );
        return result;
    }
}

