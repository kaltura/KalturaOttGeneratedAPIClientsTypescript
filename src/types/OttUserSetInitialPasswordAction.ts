
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOTTUser } from './KalturaOTTUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserSetInitialPasswordActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	token : string;
	password : string;
}

/** 
* Renew the user&#39;s password after validating the token that sent as part of
* URL in e-mail.
**/
export class OttUserSetInitialPasswordAction extends KalturaRequest<KalturaOTTUser> {

    partnerId : number;
	token : string;
	password : string;

    constructor(data : OttUserSetInitialPasswordActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaOTTUser', responseConstructor : KalturaOTTUser  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottuser' },
				action : { type : 'c', default : 'setInitialPassword' },
				partnerId : { type : 'n' },
				token : { type : 's' },
				password : { type : 's' }
            }
        );
        return result;
    }
}

