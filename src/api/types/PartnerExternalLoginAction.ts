
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLoginSession } from './KalturaLoginSession';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerExternalLoginActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'partner' action 'externalLogin'.
 *
 * Usage: Returns a login session for external system (like OVP)
 *
 * Server response type:         KalturaLoginSession
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PartnerExternalLoginAction extends KalturaRequest<KalturaLoginSession> {

    

    constructor(data? : PartnerExternalLoginActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLoginSession', responseConstructor : KalturaLoginSession  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'partner' },
				action : { type : 'c', default : 'externalLogin' }
            }
        );
        return result;
    }
}

