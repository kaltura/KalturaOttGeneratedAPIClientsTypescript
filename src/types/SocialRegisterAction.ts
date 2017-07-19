
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocial } from './KalturaSocial';

import { KalturaSocialNetwork } from './KalturaSocialNetwork';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SocialRegisterActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	token : string;
	type : KalturaSocialNetwork;
	email? : string;
}

/** 
* Create a new user in the system using a provided external social token
**/
export class SocialRegisterAction extends KalturaRequest<KalturaSocial> {

    partnerId : number;
	token : string;
	type : KalturaSocialNetwork;
	email : string;

    constructor(data : SocialRegisterActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSocial', responseConstructor : KalturaSocial  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'social' },
				action : { type : 'c', default : 'register' },
				partnerId : { type : 'n' },
				token : { type : 's' },
				type : { type : 'es', subTypeConstructor : KalturaSocialNetwork, subType : 'KalturaSocialNetwork' },
				email : { type : 's' }
            }
        );
        return result;
    }
}

