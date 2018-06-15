
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
 * Build request payload for service 'social' action 'register'.
 *
 * Usage: Create a new user in the system using a provided external social token
 *
 * Server response type:         KalturaSocial
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
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

