
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWatchBasedRecommendationsProfile } from './KalturaWatchBasedRecommendationsProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WatchBasedRecommendationsProfileUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	profile : KalturaWatchBasedRecommendationsProfile;
}

/**
 * Build request payload for service 'watchBasedRecommendationsProfile' action 'update'.
 *
 * Usage: Update partner&#39;s watch based recommendations profile
 *
 * Server response type:         KalturaWatchBasedRecommendationsProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class WatchBasedRecommendationsProfileUpdateAction extends KalturaRequest<KalturaWatchBasedRecommendationsProfile> {

    id : number;
	profile : KalturaWatchBasedRecommendationsProfile;

    constructor(data : WatchBasedRecommendationsProfileUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				profile : { type : 'o', subTypeConstructor : KalturaWatchBasedRecommendationsProfile, subType : 'KalturaWatchBasedRecommendationsProfile' }
            }
        );
        return result;
    }
}

