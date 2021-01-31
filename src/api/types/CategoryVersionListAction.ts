
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryVersionListResponse } from './KalturaCategoryVersionListResponse';

import { KalturaCategoryVersionFilter } from './KalturaCategoryVersionFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryVersionListActionArgs  extends KalturaRequestArgs {
    filter : KalturaCategoryVersionFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'categoryVersion' action 'list'.
 *
 * Usage: Gets all category versions
 *
 * Server response type:         KalturaCategoryVersionListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryVersionListAction extends KalturaRequest<KalturaCategoryVersionListResponse> {

    filter : KalturaCategoryVersionFilter;
	pager : KalturaFilterPager;

    constructor(data : CategoryVersionListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategoryVersionListResponse', responseConstructor : KalturaCategoryVersionListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'categoryversion' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaCategoryVersionFilter, subType : 'KalturaCategoryVersionFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

