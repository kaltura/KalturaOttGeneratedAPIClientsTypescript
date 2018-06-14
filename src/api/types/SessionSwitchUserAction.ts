
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLoginSession } from './KalturaLoginSession';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SessionSwitchUserActionArgs  extends KalturaRequestArgs {
    userIdToSwitch : string;
}

/**
 * Build request payload for service 'session' action 'switchUser'.
 *
 * Usage: Switching the user in the session by generating a new session for a new user within the same household
 *
 * Server response type:         KalturaLoginSession
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SessionSwitchUserAction extends KalturaRequest<KalturaLoginSession> {

    userIdToSwitch : string;

    constructor(data : SessionSwitchUserActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLoginSession', responseConstructor : KalturaLoginSession  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'session' },
				action : { type : 'c', default : 'switchUser' },
				userIdToSwitch : { type : 's' }
            }
        );
        return result;
    }
}

