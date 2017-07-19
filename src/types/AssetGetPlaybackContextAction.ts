
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaybackContext } from './KalturaPlaybackContext';

import { KalturaAssetType } from './KalturaAssetType';
import { KalturaPlaybackContextOptions } from './KalturaPlaybackContextOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetGetPlaybackContextActionArgs  extends KalturaRequestArgs {
    assetId : string;
	assetType : KalturaAssetType;
	contextDataParams : KalturaPlaybackContextOptions;
}

/** 
* This action delivers all data relevant for player
**/
export class AssetGetPlaybackContextAction extends KalturaRequest<KalturaPlaybackContext> {

    assetId : string;
	assetType : KalturaAssetType;
	contextDataParams : KalturaPlaybackContextOptions;

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
				contextDataParams : { type : 'o', subTypeConstructor : KalturaPlaybackContextOptions, subType : 'KalturaPlaybackContextOptions' }
            }
        );
        return result;
    }
}

