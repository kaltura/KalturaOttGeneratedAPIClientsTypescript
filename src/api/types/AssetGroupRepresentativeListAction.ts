
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetListResponse } from './KalturaAssetListResponse';

import { KalturaAssetGroupBy } from './KalturaAssetGroupBy';
import { KalturaUnmatchedItemsPolicy } from './KalturaUnmatchedItemsPolicy';
import { KalturaBaseAssetOrder } from './KalturaBaseAssetOrder';
import { KalturaListGroupsRepresentativesFilter } from './KalturaListGroupsRepresentativesFilter';
import { KalturaRepresentativeSelectionPolicy } from './KalturaRepresentativeSelectionPolicy';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetGroupRepresentativeListActionArgs  extends KalturaRequestArgs {
    groupBy : KalturaAssetGroupBy;
	unmatchedItemsPolicy : KalturaUnmatchedItemsPolicy;
	orderBy? : KalturaBaseAssetOrder;
	filter? : KalturaListGroupsRepresentativesFilter;
	selectionPolicy? : KalturaRepresentativeSelectionPolicy;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'asset' action 'groupRepresentativeList'.
 *
 * Usage: Returns assets deduplicated by asset metadata (or supported asset&#39;s property)
 *
 * Server response type:         KalturaAssetListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetGroupRepresentativeListAction extends KalturaRequest<KalturaAssetListResponse> {

    groupBy : KalturaAssetGroupBy;
	unmatchedItemsPolicy : KalturaUnmatchedItemsPolicy;
	orderBy : KalturaBaseAssetOrder;
	filter : KalturaListGroupsRepresentativesFilter;
	selectionPolicy : KalturaRepresentativeSelectionPolicy;
	pager : KalturaFilterPager;

    constructor(data : AssetGroupRepresentativeListActionArgs)
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
				action : { type : 'c', default : 'groupRepresentativeList' },
				groupBy : { type : 'o', subTypeConstructor : KalturaAssetGroupBy, subType : 'KalturaAssetGroupBy' },
				unmatchedItemsPolicy : { type : 'es', subTypeConstructor : KalturaUnmatchedItemsPolicy, subType : 'KalturaUnmatchedItemsPolicy' },
				orderBy : { type : 'o', subTypeConstructor : KalturaBaseAssetOrder, subType : 'KalturaBaseAssetOrder' },
				filter : { type : 'o', subTypeConstructor : KalturaListGroupsRepresentativesFilter, subType : 'KalturaListGroupsRepresentativesFilter' },
				selectionPolicy : { type : 'o', subTypeConstructor : KalturaRepresentativeSelectionPolicy, subType : 'KalturaRepresentativeSelectionPolicy' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

