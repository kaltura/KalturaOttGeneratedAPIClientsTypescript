
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetListResponse } from './KalturaAssetListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetSemanticSearchActionArgs  extends KalturaRequestArgs {
    query : string;
	refineQuery? : boolean;
	size? : number;
}

/**
 * Build request payload for service 'asset' action 'semanticSearch'.
 *
 * Usage: This API provides search capabilities for assets using semantic similarity based on the provided query
 *
 * Server response type:         KalturaAssetListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetSemanticSearchAction extends KalturaRequest<KalturaAssetListResponse> {

    query : string;
	refineQuery : boolean;
	size : number;

    constructor(data : AssetSemanticSearchActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetListResponse', responseConstructor : KalturaAssetListResponse  });
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
				action : { type : 'c', default : 'semanticSearch' },
				query : { type : 's' },
				refineQuery : { type : 'b' },
				size : { type : 'n' }
            }
        );
        return result;
    }
}

