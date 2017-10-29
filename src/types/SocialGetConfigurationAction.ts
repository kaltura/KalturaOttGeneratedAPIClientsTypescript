
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSocialConfig } from './KalturaSocialConfig';

import { KalturaSocialNetwork } from './KalturaSocialNetwork';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SocialGetConfigurationActionArgs  extends KalturaRequestArgs {
    type : KalturaSocialNetwork;
	partnerId? : number;
}

/**
 * Build request payload for service 'social' action 'getConfiguration'.
 *
 * Usage: Retrieve the social network’s configuration information
 *
 * Server response type:         KalturaSocialConfig
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SocialGetConfigurationAction extends KalturaRequest<KalturaSocialConfig> {

    type : KalturaSocialNetwork;
	partnerId : number;

    constructor(data : SocialGetConfigurationActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSocialConfig', responseConstructor : KalturaSocialConfig  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'social' },
				action : { type : 'c', default : 'getConfiguration' },
				type : { type : 'es', subTypeConstructor : KalturaSocialNetwork, subType : 'KalturaSocialNetwork' },
				partnerId : { type : 'n' }
            }
        );
        return result;
    }
}

