
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAiRecommendationTreePartnerConfiguration } from './KalturaAiRecommendationTreePartnerConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AiRecommendationTreeUpsertPartnerConfigActionArgs  extends KalturaRequestArgs {
    configuration : KalturaAiRecommendationTreePartnerConfiguration;
}

/**
 * Build request payload for service 'aiRecommendationTree' action 'upsertPartnerConfig'.
 *
 * Usage: Updates the configuration settings for TV Genie on a per-partner basis
 *
 * Server response type:         KalturaAiRecommendationTreePartnerConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AiRecommendationTreeUpsertPartnerConfigAction extends KalturaRequest<KalturaAiRecommendationTreePartnerConfiguration> {

    configuration : KalturaAiRecommendationTreePartnerConfiguration;

    constructor(data : AiRecommendationTreeUpsertPartnerConfigActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAiRecommendationTreePartnerConfiguration', responseConstructor : KalturaAiRecommendationTreePartnerConfiguration  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'airecommendationtree' },
				action : { type : 'c', default : 'upsertPartnerConfig' },
				configuration : { type : 'o', subTypeConstructor : KalturaAiRecommendationTreePartnerConfiguration, subType : 'KalturaAiRecommendationTreePartnerConfiguration' }
            }
        );
        return result;
    }
}

