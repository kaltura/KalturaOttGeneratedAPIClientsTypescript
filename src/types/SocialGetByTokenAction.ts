
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocial } from './KalturaSocial';

import { KalturaSocialNetwork } from './KalturaSocialNetwork';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SocialGetByTokenActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	token : string;
	type : KalturaSocialNetwork;
}

/** 
* Return the user object with social information according to a provided external
* social token
**/
export class SocialGetByTokenAction extends KalturaRequest<KalturaSocial> {

    partnerId : number;
	token : string;
	type : KalturaSocialNetwork;

    constructor(data : SocialGetByTokenActionArgs)
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
				action : { type : 'c', default : 'getByToken' },
				partnerId : { type : 'n' },
				token : { type : 's' },
				type : { type : 'es', subTypeConstructor : KalturaSocialNetwork, subType : 'KalturaSocialNetwork' }
            }
        );
        return result;
    }
}

