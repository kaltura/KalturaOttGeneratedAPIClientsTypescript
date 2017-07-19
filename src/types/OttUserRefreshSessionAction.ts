
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLoginSession } from './KalturaLoginSession';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserRefreshSessionActionArgs  extends KalturaRequestArgs {
    refreshToken : string;
	udid? : string;
}

/** 
* Returns new Kaltura session (ks) for the user, using the supplied refresh_token
* (only if it&#39;s valid and not expired)
**/
export class OttUserRefreshSessionAction extends KalturaRequest<KalturaLoginSession> {

    refreshToken : string;
	udid : string;

    constructor(data : OttUserRefreshSessionActionArgs)
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
				action : { type : 'c', default : 'refreshSession' },
				refreshToken : { type : 's' },
				udid : { type : 's' }
            }
        );
        return result;
    }
}

