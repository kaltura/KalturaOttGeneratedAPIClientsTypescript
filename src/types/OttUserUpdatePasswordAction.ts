
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserUpdatePasswordActionArgs  extends KalturaRequestArgs {
    userId : number;
	password : string;
}

/** 
* Update the user&#39;s existing password.
**/
export class OttUserUpdatePasswordAction extends KalturaRequest<void> {

    userId : number;
	password : string;

    constructor(data : OttUserUpdatePasswordActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottuser' },
				action : { type : 'c', default : 'updatePassword' },
				userId : { type : 'n' },
				password : { type : 's' }
            }
        );
        return result;
    }
}

