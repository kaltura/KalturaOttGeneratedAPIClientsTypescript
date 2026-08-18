
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetListResponse } from './KalturaAssetListResponse';

import { KalturaSemanticSearchParams } from './KalturaSemanticSearchParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetSemanticSearchActionArgs  extends KalturaRequestArgs {
    searchParams : KalturaSemanticSearchParams;
}

/**
 * Build request payload for service 'asset' action 'semanticSearch'.
 *
 * Usage: Search for assets using semantic similarity to a natural language query.
 * Supports unified search across both media/VOD assets and programs/EPG with optional type-specific filters
 *
 * Server response type:         KalturaAssetListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetSemanticSearchAction extends KalturaRequest<KalturaAssetListResponse> {

    searchParams : KalturaSemanticSearchParams;

    constructor(data : AssetSemanticSearchActionArgs)
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
				action : { type : 'c', default : 'semanticSearch' },
				searchParams : { type : 'o', subTypeConstructor : KalturaSemanticSearchParams, subType : 'KalturaSemanticSearchParams' }
            }
        );
        return result;
    }
}

