
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWatchBasedRecommendationsAdminConfiguration } from './KalturaWatchBasedRecommendationsAdminConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WatchBasedRecommendationsAdminConfigurationGetActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'watchBasedRecommendationsAdminConfiguration' action 'get'.
 *
 * Usage: Get partner&#39;s watch based recommendations admin configuration
 *
 * Server response type:         KalturaWatchBasedRecommendationsAdminConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class WatchBasedRecommendationsAdminConfigurationGetAction extends KalturaRequest<KalturaWatchBasedRecommendationsAdminConfiguration> {

    

    constructor(data? : WatchBasedRecommendationsAdminConfigurationGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaWatchBasedRecommendationsAdminConfiguration', responseConstructor : KalturaWatchBasedRecommendationsAdminConfiguration  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'watchbasedrecommendationsadminconfiguration' },
				action : { type : 'c', default : 'get' }
            }
        );
        return result;
    }
}

