
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserResetPasswordActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	username : string;
}

/** 
* Send an e-mail with URL to enable the user to set new password.
**/
export class OttUserResetPasswordAction extends KalturaRequest<boolean> {

    partnerId : number;
	username : string;

    constructor(data : OttUserResetPasswordActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottuser' },
				action : { type : 'c', default : 'resetPassword' },
				partnerId : { type : 'n' },
				username : { type : 's' }
            }
        );
        return result;
    }
}

