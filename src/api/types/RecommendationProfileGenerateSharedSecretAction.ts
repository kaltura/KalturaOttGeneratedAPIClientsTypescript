
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRecommendationProfile } from './KalturaRecommendationProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RecommendationProfileGenerateSharedSecretActionArgs  extends KalturaRequestArgs {
    recommendationEngineId : number;
}

/**
 * Build request payload for service 'recommendationProfile' action 'generateSharedSecret'.
 *
 * Usage: Generate recommendation engine  shared secret
 *
 * Server response type:         KalturaRecommendationProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RecommendationProfileGenerateSharedSecretAction extends KalturaRequest<KalturaRecommendationProfile> {

    recommendationEngineId : number;

    constructor(data : RecommendationProfileGenerateSharedSecretActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRecommendationProfile', responseConstructor : KalturaRecommendationProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'recommendationprofile' },
				action : { type : 'c', default : 'generateSharedSecret' },
				recommendationEngineId : { type : 'n' }
            }
        );
        return result;
    }
}

