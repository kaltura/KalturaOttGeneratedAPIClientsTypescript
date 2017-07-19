
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRecommendationProfile } from './KalturaRecommendationProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RecommendationProfileAddActionArgs  extends KalturaRequestArgs {
    recommendationEngine : KalturaRecommendationProfile;
}

/** 
* Insert new recommendation engine for partner
**/
export class RecommendationProfileAddAction extends KalturaRequest<KalturaRecommendationProfile> {

    recommendationEngine : KalturaRecommendationProfile;

    constructor(data : RecommendationProfileAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				recommendationEngine : { type : 'o', subTypeConstructor : KalturaRecommendationProfile, subType : 'KalturaRecommendationProfile' }
            }
        );
        return result;
    }
}

