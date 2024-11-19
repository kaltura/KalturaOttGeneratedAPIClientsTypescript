
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WatchBasedRecommendationsProfileDeleteWatchBasedRecommendationsOfProfileActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'watchBasedRecommendationsProfile' action 'deleteWatchBasedRecommendationsOfProfile'.
 *
 * Usage: Delete all recommendations that were calculated based on specific profile
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class WatchBasedRecommendationsProfileDeleteWatchBasedRecommendationsOfProfileAction extends KalturaRequest<void> {

    id : number;

    constructor(data : WatchBasedRecommendationsProfileDeleteWatchBasedRecommendationsOfProfileActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'watchbasedrecommendationsprofile' },
				action : { type : 'c', default : 'deleteWatchBasedRecommendationsOfProfile' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

