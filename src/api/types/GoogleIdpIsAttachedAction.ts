
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocialAttachStatus } from './KalturaSocialAttachStatus';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GoogleIdpIsAttachedActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'googleIdp' action 'isAttached'.
 *
 * Usage: Returns whether the user in question is attached to the Google
 *
 * Server response type:         KalturaSocialAttachStatus
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GoogleIdpIsAttachedAction extends KalturaRequest<KalturaSocialAttachStatus> {

    

    constructor(data? : GoogleIdpIsAttachedActionArgs)
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
				action : { type : 'c', default : 'isAttached' }
            }
        );
        return result;
    }
}

