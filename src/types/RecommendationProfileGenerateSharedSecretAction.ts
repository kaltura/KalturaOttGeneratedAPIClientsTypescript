
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRecommendationProfile } from './KalturaRecommendationProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RecommendationProfileGenerateSharedSecretActionArgs  extends KalturaRequestArgs {
    recommendationEngineId : number;
}

/** 
* Generate recommendation engine  shared secret
**/
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

