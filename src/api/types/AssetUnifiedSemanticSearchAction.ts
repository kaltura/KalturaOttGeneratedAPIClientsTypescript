
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetListResponse } from './KalturaAssetListResponse';

import { KalturaSemanticSearchParams } from './KalturaSemanticSearchParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetUnifiedSemanticSearchActionArgs  extends KalturaRequestArgs {
    searchParams : KalturaSemanticSearchParams;
}

/**
 * Build request payload for service 'asset' action 'unifiedSemanticSearch'.
 *
 * Usage: Performs unified semantic search across media and programs
 *
 * Server response type:         KalturaAssetListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetUnifiedSemanticSearchAction extends KalturaRequest<KalturaAssetListResponse> {

    searchParams : KalturaSemanticSearchParams;

    constructor(data : AssetUnifiedSemanticSearchActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetListResponse', responseConstructor : KalturaAssetListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'asset' },
				action : { type : 'c', default : 'unifiedSemanticSearch' },
				searchParams : { type : 'o', subTypeConstructor : KalturaSemanticSearchParams, subType : 'KalturaSemanticSearchParams' }
            }
        );
        return result;
    }
}

