
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOTTUser } from './KalturaOTTUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserActivateActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	username : string;
	activationToken : string;
}

/**
 * Build request payload for service 'ottUser' action 'activate'.
 *
 * Usage: Activate the account by activation token
 *
 * Server response type:         KalturaOTTUser
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OttUserActivateAction extends KalturaRequest<KalturaOTTUser> {

    partnerId : number;
	username : string;
	activationToken : string;

    constructor(data : OttUserActivateActionArgs)
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
				action : { type : 'c', default : 'activate' },
				partnerId : { type : 'n' },
				username : { type : 's' },
				activationToken : { type : 's' }
            }
        );
        return result;
    }
}

