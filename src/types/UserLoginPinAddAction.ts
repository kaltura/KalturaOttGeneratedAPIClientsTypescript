
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserLoginPin } from './KalturaUserLoginPin';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserLoginPinAddActionArgs  extends KalturaRequestArgs {
    secret? : string;
}

/** 
* Generate a time and usage expiry login-PIN that can allow a single login per
* PIN. If an active login-PIN already exists. Calling this API again for same user
* will add another login-PIN
**/
export class UserLoginPinAddAction extends KalturaRequest<KalturaUserLoginPin> {

    secret : string;

    constructor(data? : UserLoginPinAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserLoginPin', responseConstructor : KalturaUserLoginPin  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userloginpin' },
				action : { type : 'c', default : 'add' },
				secret : { type : 's' }
            }
        );
        return result;
    }
}

