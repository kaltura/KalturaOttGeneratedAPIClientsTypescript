
import { KalturaObjectMetadata } from '../kaltura-object-base';


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
}

/** 
* Redirects to play manifest
**/
export class AssetFilePlayManifestAction extends KalturaRequest<void> {

    partnerId : number;
	assetId : string;
	assetType : KalturaAssetType;
	assetFileId : number;
	contextType : KalturaPlaybackContextType;
	ks : string;

    constructor(data : AssetFilePlayManifestActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
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
				ks : { type : 's' }
            }
        );
        return result;
    }
}

