
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAsset } from './KalturaAsset';

import { KalturaAssetReferenceType } from './KalturaAssetReferenceType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetGetActionArgs  extends KalturaRequestArgs {
    id : string;
	assetReferenceType : KalturaAssetReferenceType;
}

/** 
* Returns media or EPG asset by media / EPG internal or external identifier
**/
export class AssetGetAction extends KalturaRequest<KalturaAsset> {

    id : string;
	assetReferenceType : KalturaAssetReferenceType;

    constructor(data : AssetGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAsset', responseConstructor : KalturaAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'asset' },
				action : { type : 'c', default : 'get' },
				id : { type : 's' },
				assetReferenceType : { type : 'es', subTypeConstructor : KalturaAssetReferenceType, subType : 'KalturaAssetReferenceType' }
            }
        );
        return result;
    }
}

