
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetListResponse } from './KalturaAssetListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetWatchBasedRecommendationsListActionArgs  extends KalturaRequestArgs {
    profileId : number;
}

/**
 * Build request payload for service 'asset' action 'watchBasedRecommendationsList'.
 *
 * Usage: Return list of assets - assets are personal recommendations for the caller
 *
 * Server response type:         KalturaAssetListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetWatchBasedRecommendationsListAction extends KalturaRequest<KalturaAssetListResponse> {

    profileId : number;

    constructor(data : AssetWatchBasedRecommendationsListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetListResponse', responseConstructor : KalturaAssetListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'asset' },
				action : { type : 'c', default : 'watchBasedRecommendationsList' },
				profileId : { type : 'n' }
            }
        );
        return result;
    }
}

