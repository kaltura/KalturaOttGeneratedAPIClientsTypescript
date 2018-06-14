
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetCommentListResponse } from './KalturaAssetCommentListResponse';

import { KalturaAssetCommentFilter } from './KalturaAssetCommentFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetCommentListActionArgs  extends KalturaRequestArgs {
    filter : KalturaAssetCommentFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'assetComment' action 'list'.
 *
 * Usage: Returns asset comments by asset id
 *
 * Server response type:         KalturaAssetCommentListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetCommentListAction extends KalturaRequest<KalturaAssetCommentListResponse> {

    filter : KalturaAssetCommentFilter;
	pager : KalturaFilterPager;

    constructor(data : AssetCommentListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetCommentListResponse', responseConstructor : KalturaAssetCommentListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetcomment' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaAssetCommentFilter, subType : 'KalturaAssetCommentFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

