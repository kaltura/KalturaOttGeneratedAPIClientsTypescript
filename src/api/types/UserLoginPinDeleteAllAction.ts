
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserLoginPinDeleteAllActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'userLoginPin' action 'deleteAll'.
 *
 * Usage: Immediately expire all active login-PINs for a user
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserLoginPinDeleteAllAction extends KalturaRequest<boolean> {

    

    constructor(data? : UserLoginPinDeleteAllActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userloginpin' },
				action : { type : 'c', default : 'deleteAll' }
            }
        );
        return result;
    }
}

