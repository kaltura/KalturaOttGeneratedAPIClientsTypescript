
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOTTUser } from './KalturaOTTUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserRegisterActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	user : KalturaOTTUser;
	password : string;
}

/**
 * Build request payload for service 'ottUser' action 'register'.
 *
 * Usage: Sign up a new user
 *
 * Server response type:         KalturaOTTUser
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OttUserRegisterAction extends KalturaRequest<KalturaOTTUser> {

    partnerId : number;
	user : KalturaOTTUser;
	password : string;

    constructor(data : OttUserRegisterActionArgs)
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
				action : { type : 'c', default : 'register' },
				partnerId : { type : 'n' },
				user : { type : 'o', subTypeConstructor : KalturaOTTUser, subType : 'KalturaOTTUser' },
				password : { type : 's' }
            }
        );
        return result;
    }
}

