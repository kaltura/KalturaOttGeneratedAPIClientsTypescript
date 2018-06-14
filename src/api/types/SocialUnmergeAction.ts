
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocial } from './KalturaSocial';

import { KalturaSocialNetwork } from './KalturaSocialNetwork';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SocialUnmergeActionArgs  extends KalturaRequestArgs {
    type : KalturaSocialNetwork;
}

/**
 * Build request payload for service 'social' action 'unmerge'.
 *
 * Usage: Disconnect an existing user in the system from its external social network user
 *
 * Server response type:         KalturaSocial
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SocialUnmergeAction extends KalturaRequest<KalturaSocial> {

    type : KalturaSocialNetwork;

    constructor(data : SocialUnmergeActionArgs)
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
				action : { type : 'c', default : 'unmerge' },
				type : { type : 'es', subTypeConstructor : KalturaSocialNetwork, subType : 'KalturaSocialNetwork' }
            }
        );
        return result;
    }
}

