
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWatchBasedRecommendationsAdminConfiguration } from './KalturaWatchBasedRecommendationsAdminConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WatchBasedRecommendationsAdminConfigurationUpdateActionArgs  extends KalturaRequestArgs {
    configuration : KalturaWatchBasedRecommendationsAdminConfiguration;
}

/**
 * Build request payload for service 'watchBasedRecommendationsAdminConfiguration' action 'update'.
 *
 * Usage: Updates partner&#39;s watch based recommendations admin configuration
 *
 * Server response type:         KalturaWatchBasedRecommendationsAdminConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class WatchBasedRecommendationsAdminConfigurationUpdateAction extends KalturaRequest<KalturaWatchBasedRecommendationsAdminConfiguration> {

    configuration : KalturaWatchBasedRecommendationsAdminConfiguration;

    constructor(data : WatchBasedRecommendationsAdminConfigurationUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				configuration : { type : 'o', subTypeConstructor : KalturaWatchBasedRecommendationsAdminConfiguration, subType : 'KalturaWatchBasedRecommendationsAdminConfiguration' }
            }
        );
        return result;
    }
}

