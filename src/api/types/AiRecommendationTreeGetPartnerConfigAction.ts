
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAiRecommendationTreePartnerConfiguration } from './KalturaAiRecommendationTreePartnerConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AiRecommendationTreeGetPartnerConfigActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'aiRecommendationTree' action 'getPartnerConfig'.
 *
 * Usage: Retrieves the current configuration settings for TV Genie for a specific partner
 *
 * Server response type:         KalturaAiRecommendationTreePartnerConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AiRecommendationTreeGetPartnerConfigAction extends KalturaRequest<KalturaAiRecommendationTreePartnerConfiguration> {

    

    constructor(data? : AiRecommendationTreeGetPartnerConfigActionArgs)
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
				action : { type : 'c', default : 'getPartnerConfig' }
            }
        );
        return result;
    }
}

