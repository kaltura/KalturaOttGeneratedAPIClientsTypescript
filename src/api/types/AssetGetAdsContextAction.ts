
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAdsContext } from './KalturaAdsContext';

import { KalturaAssetType } from './KalturaAssetType';
import { KalturaPlaybackContextOptions } from './KalturaPlaybackContextOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetGetAdsContextActionArgs  extends KalturaRequestArgs {
    assetId : string;
	assetType : KalturaAssetType;
	contextDataParams : KalturaPlaybackContextOptions;
}

/**
 * Build request payload for service 'asset' action 'getAdsContext'.
 *
 * Usage: Returns the data for ads control
 *
 * Server response type:         KalturaAdsContext
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetGetAdsContextAction extends KalturaRequest<KalturaAdsContext> {

    assetId : string;
	assetType : KalturaAssetType;
	contextDataParams : KalturaPlaybackContextOptions;

    constructor(data : AssetGetAdsContextActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAdsContext', responseConstructor : KalturaAdsContext  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'asset' },
				action : { type : 'c', default : 'getAdsContext' },
				assetId : { type : 's' },
				assetType : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				contextDataParams : { type : 'o', subTypeConstructor : KalturaPlaybackContextOptions, subType : 'KalturaPlaybackContextOptions' }
            }
        );
        return result;
    }
}

