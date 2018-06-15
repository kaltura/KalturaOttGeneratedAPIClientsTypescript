
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetHistoryListResponse } from './KalturaAssetHistoryListResponse';

import { KalturaAssetHistoryFilter } from './KalturaAssetHistoryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetHistoryListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaAssetHistoryFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'assetHistory' action 'list'.
 *
 * Usage: Get recently watched media for user, ordered by recently watched first
 *
 * Server response type:         KalturaAssetHistoryListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetHistoryListAction extends KalturaRequest<KalturaAssetHistoryListResponse> {

    filter : KalturaAssetHistoryFilter;
	pager : KalturaFilterPager;

    constructor(data? : AssetHistoryListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAssetHistoryListResponse', responseConstructor : KalturaAssetHistoryListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assethistory' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaAssetHistoryFilter, subType : 'KalturaAssetHistoryFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

