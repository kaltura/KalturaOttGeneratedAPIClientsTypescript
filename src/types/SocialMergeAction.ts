
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocial } from './KalturaSocial';

import { KalturaSocialNetwork } from './KalturaSocialNetwork';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SocialMergeActionArgs  extends KalturaRequestArgs {
    token : string;
	type : KalturaSocialNetwork;
}

/** 
* Connect an existing user in the system to an external social network user
**/
export class SocialMergeAction extends KalturaRequest<KalturaSocial> {

    token : string;
	type : KalturaSocialNetwork;

    constructor(data : SocialMergeActionArgs)
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
				action : { type : 'c', default : 'merge' },
				token : { type : 's' },
				type : { type : 'es', subTypeConstructor : KalturaSocialNetwork, subType : 'KalturaSocialNetwork' }
            }
        );
        return result;
    }
}

