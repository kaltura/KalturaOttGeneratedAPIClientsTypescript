
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOTTUser } from './KalturaOTTUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserUpdateActionArgs  extends KalturaRequestArgs {
    user : KalturaOTTUser;
}

/** 
* Update user information
**/
export class OttUserUpdateAction extends KalturaRequest<KalturaOTTUser> {

    user : KalturaOTTUser;

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
				user : { type : 'o', subTypeConstructor : KalturaOTTUser, subType : 'KalturaOTTUser' }
            }
        );
        return result;
    }
}

