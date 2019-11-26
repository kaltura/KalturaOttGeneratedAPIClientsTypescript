
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaybackContext } from './KalturaPlaybackContext';

import { KalturaAssetType } from './KalturaAssetType';
import { KalturaPlaybackContextOptions } from './KalturaPlaybackContextOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetGetPlaybackContextActionArgs  extends KalturaRequestArgs {
    assetId : string;
	assetType : KalturaAssetType;
	contextDataParams : KalturaPlaybackContextOptions;
	sourceType? : string;
}

/**
 * Build request payload for service 'asset' action 'getPlaybackContext'.
 *
 * Usage: This action delivers all data relevant for player
 *
 * Server response type:         KalturaPlaybackContext
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetGetPlaybackContextAction extends KalturaRequest<KalturaPlaybackContext> {

    assetId : string;
	assetType : KalturaAssetType;
	contextDataParams : KalturaPlaybackContextOptions;
	sourceType : string;

    constructor(data : AssetGetPlaybackContextActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPlaybackContext', responseConstructor : KalturaPlaybackContext  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'asset' },
				action : { type : 'c', default : 'getPlaybackContext' },
				assetId : { type : 's' },
				assetType : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				contextDataParams : { type : 'o', subTypeConstructor : KalturaPlaybackContextOptions, subType : 'KalturaPlaybackContextOptions' },
				sourceType : { type : 's' }
            }
        );
        return result;
    }
}

