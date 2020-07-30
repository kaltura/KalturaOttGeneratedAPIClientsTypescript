
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserLoginPin } from './KalturaUserLoginPin';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserLoginPinAddActionArgs  extends KalturaRequestArgs {
    secret? : string;
	pinUsages? : number;
	pinDuration? : number;
}

/**
 * Build request payload for service 'userLoginPin' action 'add'.
 *
 * Usage: Generate a time and usage expiry login-PIN that can allow a single/multiple login/s per PIN.
 * If an active login-PIN already exists. Calling this API again for same user will add another login-PIN
 *
 * Server response type:         KalturaUserLoginPin
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserLoginPinAddAction extends KalturaRequest<KalturaUserLoginPin> {

    secret : string;
	pinUsages : number;
	pinDuration : number;

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
				secret : { type : 's' },
				pinUsages : { type : 'n' },
				pinDuration : { type : 'n' }
            }
        );
        return result;
    }
}

