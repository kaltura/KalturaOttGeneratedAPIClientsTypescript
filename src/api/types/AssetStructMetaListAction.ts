
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetStructMetaListResponse } from './KalturaAssetStructMetaListResponse';

import { KalturaAssetStructMetaFilter } from './KalturaAssetStructMetaFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetStructMetaListActionArgs  extends KalturaRequestArgs {
    filter : KalturaAssetStructMetaFilter;
}

/**
 * Build request payload for service 'assetStructMeta' action 'list'.
 *
 * Usage: Return a list of asset struct metas for the account with optional filter
 *
 * Server response type:         KalturaAssetStructMetaListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetStructMetaListAction extends KalturaRequest<KalturaAssetStructMetaListResponse> {

    filter : KalturaAssetStructMetaFilter;

    constructor(data : AssetStructMetaListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetStructMetaListResponse', responseConstructor : KalturaAssetStructMetaListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetstructmeta' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaAssetStructMetaFilter, subType : 'KalturaAssetStructMetaFilter' }
            }
        );
        return result;
    }
}

