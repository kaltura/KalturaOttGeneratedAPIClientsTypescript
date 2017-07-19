
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserUpdateLoginDataActionArgs  extends KalturaRequestArgs {
    username : string;
	oldPassword : string;
	newPassword : string;
}

/** 
* Given a user name and existing password, change to a new password.
**/
export class OttUserUpdateLoginDataAction extends KalturaRequest<boolean> {

    username : string;
	oldPassword : string;
	newPassword : string;

    constructor(data : OttUserUpdateLoginDataActionArgs)
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
				action : { type : 'c', default : 'updateLoginData' },
				username : { type : 's' },
				oldPassword : { type : 's' },
				newPassword : { type : 's' }
            }
        );
        return result;
    }
}

