
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserSessionProfile } from './KalturaUserSessionProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserSessionProfileUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	userSessionProfile : KalturaUserSessionProfile;
}

/**
 * Build request payload for service 'userSessionProfile' action 'update'.
 *
 * Usage: Update existing UserSessionProfile
 *
 * Server response type:         KalturaUserSessionProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserSessionProfileUpdateAction extends KalturaRequest<KalturaUserSessionProfile> {

    id : number;
	userSessionProfile : KalturaUserSessionProfile;

    constructor(data : UserSessionProfileUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				userSessionProfile : { type : 'o', subTypeConstructor : KalturaUserSessionProfile, subType : 'KalturaUserSessionProfile' }
            }
        );
        return result;
    }
}

