
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetStructListResponse } from './KalturaAssetStructListResponse';

import { KalturaAssetStructFilter } from './KalturaAssetStructFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetStructListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaAssetStructFilter;
}

/**
 * Build request payload for service 'assetStruct' action 'list'.
 *
 * Usage: Return a list of asset structs for the account with optional filter
 *
 * Server response type:         KalturaAssetStructListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetStructListAction extends KalturaRequest<KalturaAssetStructListResponse> {

    filter : KalturaAssetStructFilter;

    constructor(data? : AssetStructListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetStructListResponse', responseConstructor : KalturaAssetStructListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetstruct' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaAssetStructFilter, subType : 'KalturaAssetStructFilter' }
            }
        );
        return result;
    }
}

