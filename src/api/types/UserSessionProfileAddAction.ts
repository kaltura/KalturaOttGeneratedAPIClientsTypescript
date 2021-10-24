
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserSessionProfile } from './KalturaUserSessionProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserSessionProfileAddActionArgs  extends KalturaRequestArgs {
    userSessionProfile : KalturaUserSessionProfile;
}

/**
 * Build request payload for service 'userSessionProfile' action 'add'.
 *
 * Usage: Add new UserSessionProfile
 *
 * Server response type:         KalturaUserSessionProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserSessionProfileAddAction extends KalturaRequest<KalturaUserSessionProfile> {

    userSessionProfile : KalturaUserSessionProfile;

    constructor(data : UserSessionProfileAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserSessionProfile', responseConstructor : KalturaUserSessionProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'usersessionprofile' },
				action : { type : 'c', default : 'add' },
				userSessionProfile : { type : 'o', subTypeConstructor : KalturaUserSessionProfile, subType : 'KalturaUserSessionProfile' }
            }
        );
        return result;
    }
}

