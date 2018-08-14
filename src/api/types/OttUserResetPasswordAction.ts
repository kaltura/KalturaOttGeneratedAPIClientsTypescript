
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserResetPasswordActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	username : string;
	templateName? : string;
}

/**
 * Build request payload for service 'ottUser' action 'resetPassword'.
 *
 * Usage: Send an e-mail with URL to enable the user to set new password
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OttUserResetPasswordAction extends KalturaRequest<boolean> {

    partnerId : number;
	username : string;
	templateName : string;

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
				username : { type : 's' },
				templateName : { type : 's' }
            }
        );
        return result;
    }
}

