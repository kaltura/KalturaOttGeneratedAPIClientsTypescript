
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaWatchBasedRecommendationsProfile } from './KalturaWatchBasedRecommendationsProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaWatchBasedRecommendationsProfileListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaWatchBasedRecommendationsProfile[];
}


export class KalturaWatchBasedRecommendationsProfileListResponse extends KalturaListResponse {

    objects : KalturaWatchBasedRecommendationsProfile[];

    constructor(data? : KalturaWatchBasedRecommendationsProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaWatchBasedRecommendationsProfileListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaWatchBasedRecommendationsProfile, subType : 'KalturaWatchBasedRecommendationsProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWatchBasedRecommendationsProfileListResponse',KalturaWatchBasedRecommendationsProfileListResponse);
