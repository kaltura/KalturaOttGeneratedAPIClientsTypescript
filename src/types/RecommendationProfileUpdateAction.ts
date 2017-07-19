
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRecommendationProfile } from './KalturaRecommendationProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RecommendationProfileUpdateActionArgs  extends KalturaRequestArgs {
    recommendationEngineId : number;
	recommendationEngine : KalturaRecommendationProfile;
}

/** 
* Update recommendation engine details
**/
export class RecommendationProfileUpdateAction extends KalturaRequest<KalturaRecommendationProfile> {

    recommendationEngineId : number;
	recommendationEngine : KalturaRecommendationProfile;

    constructor(data : RecommendationProfileUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				recommendationEngineId : { type : 'n' },
				recommendationEngine : { type : 'o', subTypeConstructor : KalturaRecommendationProfile, subType : 'KalturaRecommendationProfile' }
            }
        );
        return result;
    }
}

