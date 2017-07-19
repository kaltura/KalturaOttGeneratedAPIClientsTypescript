
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRecommendationProfileListResponse } from './KalturaRecommendationProfileListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RecommendationProfileListActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Returns all recommendation engines for partner
**/
export class RecommendationProfileListAction extends KalturaRequest<KalturaRecommendationProfileListResponse> {

    

    constructor(data? : RecommendationProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRecommendationProfileListResponse', responseConstructor : KalturaRecommendationProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'recommendationprofile' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

