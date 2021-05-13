
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetFile } from './KalturaAssetFile';

import { KalturaAssetType } from './KalturaAssetType';
import { KalturaPlaybackContextType } from './KalturaPlaybackContextType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetFilePlayManifestActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	assetId : string;
	assetType : KalturaAssetType;
	assetFileId : number;
	contextType : KalturaPlaybackContextType;
	ks? : string;
	tokenizedUrl? : string;
}

/**
 * Build request payload for service 'assetFile' action 'playManifest'.
 *
 * Usage: Redirects to play manifest
 *
 * Server response type:         KalturaAssetFile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetFilePlayManifestAction extends KalturaRequest<KalturaAssetFile> {

    partnerId : number;
	assetId : string;
	assetType : KalturaAssetType;
	assetFileId : number;
	contextType : KalturaPlaybackContextType;
	ks : string;
	tokenizedUrl : string;

    constructor(data : AssetFilePlayManifestActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetFile', responseConstructor : KalturaAssetFile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetfile' },
				action : { type : 'c', default : 'playManifest' },
				partnerId : { type : 'n' },
				assetId : { type : 's' },
				assetType : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				assetFileId : { type : 'n' },
				contextType : { type : 'es', subTypeConstructor : KalturaPlaybackContextType, subType : 'KalturaPlaybackContextType' },
				ks : { type : 's' },
				tokenizedUrl : { type : 's' }
            }
        );
        return result;
    }
}

