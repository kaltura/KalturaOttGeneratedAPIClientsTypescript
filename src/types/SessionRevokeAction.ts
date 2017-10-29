
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SessionRevokeActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'session' action 'revoke'.
 *
 * Usage: Revokes all the sessions (KS) of a given user
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SessionRevokeAction extends KalturaRequest<boolean> {

    

    constructor(data? : SessionRevokeActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'session' },
				action : { type : 'c', default : 'revoke' }
            }
        );
        return result;
    }
}

