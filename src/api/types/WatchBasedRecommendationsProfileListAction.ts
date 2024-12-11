
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWatchBasedRecommendationsProfileListResponse } from './KalturaWatchBasedRecommendationsProfileListResponse';

import { KalturaWatchBasedRecommendationsProfileFilter } from './KalturaWatchBasedRecommendationsProfileFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WatchBasedRecommendationsProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaWatchBasedRecommendationsProfileFilter;
}

/**
 * Build request payload for service 'watchBasedRecommendationsProfile' action 'list'.
 *
 * Usage: Get partner&#39;s watch based recommendations profiles
 *
 * Server response type:         KalturaWatchBasedRecommendationsProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class WatchBasedRecommendationsProfileListAction extends KalturaRequest<KalturaWatchBasedRecommendationsProfileListResponse> {

    filter : KalturaWatchBasedRecommendationsProfileFilter;

    constructor(data? : WatchBasedRecommendationsProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaWatchBasedRecommendationsProfileListResponse', responseConstructor : KalturaWatchBasedRecommendationsProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'watchbasedrecommendationsprofile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaWatchBasedRecommendationsProfileFilter, subType : 'KalturaWatchBasedRecommendationsProfileFilter' }
            }
        );
        return result;
    }
}

