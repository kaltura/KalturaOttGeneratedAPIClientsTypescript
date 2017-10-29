
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOTTUser } from './KalturaOTTUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserUpdateActionArgs  extends KalturaRequestArgs {
    user : KalturaOTTUser;
	id? : string;
}

/**
 * Build request payload for service 'ottUser' action 'update'.
 *
 * Usage: Update user information
 *
 * Server response type:         KalturaOTTUser
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OttUserUpdateAction extends KalturaRequest<KalturaOTTUser> {

    user : KalturaOTTUser;
	id : string;

    constructor(data : OttUserUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaOTTUser', responseConstructor : KalturaOTTUser  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottuser' },
				action : { type : 'c', default : 'update' },
				user : { type : 'o', subTypeConstructor : KalturaOTTUser, subType : 'KalturaOTTUser' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

