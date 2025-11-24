
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetListResponse } from './KalturaAssetListResponse';

import { KalturaSearchScope } from './KalturaSearchScope';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetUnifiedSemanticSearchActionArgs  extends KalturaRequestArgs {
    query : string;
	searchScopes : KalturaSearchScope[];
	refineQuery? : boolean;
	size? : number;
}

/**
 * Build request payload for service 'asset' action 'unifiedSemanticSearch'.
 *
 * Usage: Performs unified semantic search across both assets and programs
 *
 * Server response type:         KalturaAssetListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetUnifiedSemanticSearchAction extends KalturaRequest<KalturaAssetListResponse> {

    query : string;
	searchScopes : KalturaSearchScope[];
	refineQuery : boolean;
	size : number;

    constructor(data : AssetUnifiedSemanticSearchActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetListResponse', responseConstructor : KalturaAssetListResponse  });
        if (typeof this.searchScopes === 'undefined') this.searchScopes = [];
		if (typeof this.refineQuery === 'undefined') this.refineQuery = false;
		if (typeof this.size === 'undefined') this.size = 10;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'asset' },
				action : { type : 'c', default : 'unifiedSemanticSearch' },
				query : { type : 's' },
				searchScopes : { type : 'a', subTypeConstructor : KalturaSearchScope, subType : 'KalturaSearchScope' },
				refineQuery : { type : 'b' },
				size : { type : 'n' }
            }
        );
        return result;
    }
}

