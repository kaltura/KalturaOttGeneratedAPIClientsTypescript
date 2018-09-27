
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetFilePpvListResponse } from './KalturaAssetFilePpvListResponse';

import { KalturaAssetFilePpvFilter } from './KalturaAssetFilePpvFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetFilePpvListActionArgs  extends KalturaRequestArgs {
    filter : KalturaAssetFilePpvFilter;
}

/**
 * Build request payload for service 'assetFilePpv' action 'list'.
 *
 * Usage: Return a list of asset files ppvs for the account with optional filter
 *
 * Server response type:         KalturaAssetFilePpvListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetFilePpvListAction extends KalturaRequest<KalturaAssetFilePpvListResponse> {

    filter : KalturaAssetFilePpvFilter;

    constructor(data : AssetFilePpvListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetFilePpvListResponse', responseConstructor : KalturaAssetFilePpvListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetfileppv' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaAssetFilePpvFilter, subType : 'KalturaAssetFilePpvFilter' }
            }
        );
        return result;
    }
}

