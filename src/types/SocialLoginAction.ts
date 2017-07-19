
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLoginResponse } from './KalturaLoginResponse';

import { KalturaSocialNetwork } from './KalturaSocialNetwork';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SocialLoginActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	token : string;
	type : KalturaSocialNetwork;
	udid? : string;
}

/** 
* Login using social token
**/
export class SocialLoginAction extends KalturaRequest<KalturaLoginResponse> {

    partnerId : number;
	token : string;
	type : KalturaSocialNetwork;
	udid : string;

    constructor(data : SocialLoginActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLoginResponse', responseConstructor : KalturaLoginResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'social' },
				action : { type : 'c', default : 'login' },
				partnerId : { type : 'n' },
				token : { type : 's' },
				type : { type : 'es', subTypeConstructor : KalturaSocialNetwork, subType : 'KalturaSocialNetwork' },
				udid : { type : 's' }
            }
        );
        return result;
    }
}

