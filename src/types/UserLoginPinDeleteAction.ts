
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserLoginPinDeleteActionArgs  extends KalturaRequestArgs {
    pinCode : string;
}

/** 
* Immediately deletes a given pre set login pin code for the user.
**/
export class UserLoginPinDeleteAction extends KalturaRequest<boolean> {

    pinCode : string;

    constructor(data : UserLoginPinDeleteActionArgs)
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
				action : { type : 'c', default : 'delete' },
				pinCode : { type : 's' }
            }
        );
        return result;
    }
}

