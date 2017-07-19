
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRecommendationProfile } from './KalturaRecommendationProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaRecommendationProfileListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaRecommendationProfile[];
}

/** 
* List of recommendation profiles.
**/
export class KalturaRecommendationProfileListResponse extends KalturaListResponse {

    objects : KalturaRecommendationProfile[];

    constructor(data? : KalturaRecommendationProfileListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRecommendationProfileListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaRecommendationProfile, subType : 'KalturaRecommendationProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRecommendationProfileListResponse',KalturaRecommendationProfileListResponse);
