
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWatchBasedRecommendationsProfile } from './KalturaWatchBasedRecommendationsProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WatchBasedRecommendationsProfileAddActionArgs  extends KalturaRequestArgs {
    profile : KalturaWatchBasedRecommendationsProfile;
}

/**
 * Build request payload for service 'watchBasedRecommendationsProfile' action 'add'.
 *
 * Usage: Add partner&#39;s watch based recommendations profile
 *
 * Server response type:         KalturaWatchBasedRecommendationsProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class WatchBasedRecommendationsProfileAddAction extends KalturaRequest<KalturaWatchBasedRecommendationsProfile> {

    profile : KalturaWatchBasedRecommendationsProfile;

    constructor(data : WatchBasedRecommendationsProfileAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaWatchBasedRecommendationsProfile', responseConstructor : KalturaWatchBasedRecommendationsProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'watchbasedrecommendationsprofile' },
				action : { type : 'c', default : 'add' },
				profile : { type : 'o', subTypeConstructor : KalturaWatchBasedRecommendationsProfile, subType : 'KalturaWatchBasedRecommendationsProfile' }
            }
        );
        return result;
    }
}

