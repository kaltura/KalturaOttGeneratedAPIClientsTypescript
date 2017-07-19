
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserLoginPinDeleteAllActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Immediately expire all active login-PINs for a user
**/
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

