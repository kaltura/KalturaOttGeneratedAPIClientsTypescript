
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLoginSession } from './KalturaLoginSession';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserAnonymousLoginActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	udid? : string;
}

/** 
* Returns tokens (KS and refresh token) for anonymous access
**/
export class OttUserAnonymousLoginAction extends KalturaRequest<KalturaLoginSession> {

    partnerId : number;
	udid : string;

    constructor(data : OttUserAnonymousLoginActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLoginSession', responseConstructor : KalturaLoginSession  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottuser' },
				action : { type : 'c', default : 'anonymousLogin' },
				partnerId : { type : 'n' },
				udid : { type : 's' }
            }
        );
        return result;
    }
}

