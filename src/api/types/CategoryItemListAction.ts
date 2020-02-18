
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryItemListResponse } from './KalturaCategoryItemListResponse';

import { KalturaCategoryItemFilter } from './KalturaCategoryItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryItemListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCategoryItemFilter;
	pager : KalturaFilterPager;
}

/**
 * Build request payload for service 'categoryItem' action 'list'.
 *
 * Usage: Gets all categoryItem items
 *
 * Server response type:         KalturaCategoryItemListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryItemListAction extends KalturaRequest<KalturaCategoryItemListResponse> {

    filter : KalturaCategoryItemFilter;
	pager : KalturaFilterPager;

    constructor(data : CategoryItemListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategoryItemListResponse', responseConstructor : KalturaCategoryItemListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'categoryitem' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaCategoryItemFilter, subType : 'KalturaCategoryItemFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

