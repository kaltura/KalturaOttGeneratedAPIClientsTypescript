
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetFilePpv } from './KalturaAssetFilePpv';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetFilePpvAddActionArgs  extends KalturaRequestArgs {
    assetFilePpv : KalturaAssetFilePpv;
}

/**
 * Build request payload for service 'assetFilePpv' action 'add'.
 *
 * Usage: Add asset file ppv
 *
 * Server response type:         KalturaAssetFilePpv
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetFilePpvAddAction extends KalturaRequest<KalturaAssetFilePpv> {

    assetFilePpv : KalturaAssetFilePpv;

    constructor(data : AssetFilePpvAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetFilePpv', responseConstructor : KalturaAssetFilePpv  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetfileppv' },
				action : { type : 'c', default : 'add' },
				assetFilePpv : { type : 'o', subTypeConstructor : KalturaAssetFilePpv, subType : 'KalturaAssetFilePpv' }
            }
        );
        return result;
    }
}

