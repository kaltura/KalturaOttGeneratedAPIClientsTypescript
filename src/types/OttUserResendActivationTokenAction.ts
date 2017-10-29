
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserResendActivationTokenActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	username : string;
}

/**
 * Build request payload for service 'ottUser' action 'resendActivationToken'.
 *
 * Usage: Resend the activation token to a user
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OttUserResendActivationTokenAction extends KalturaRequest<boolean> {

    partnerId : number;
	username : string;

    constructor(data : OttUserResendActivationTokenActionArgs)
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
				action : { type : 'c', default : 'resendActivationToken' },
				partnerId : { type : 'n' },
				username : { type : 's' }
            }
        );
        return result;
    }
}

