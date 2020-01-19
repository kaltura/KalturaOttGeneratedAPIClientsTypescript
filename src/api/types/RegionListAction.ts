
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRegionListResponse } from './KalturaRegionListResponse';

import { KalturaBaseRegionFilter } from './KalturaBaseRegionFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RegionListActionArgs  extends KalturaRequestArgs {
    filter : KalturaBaseRegionFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'region' action 'list'.
 *
 * Usage: Returns all regions for the partner
 *
 * Server response type:         KalturaRegionListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RegionListAction extends KalturaRequest<KalturaRegionListResponse> {

    filter : KalturaBaseRegionFilter;
	pager : KalturaFilterPager;

    constructor(data : RegionListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRegionListResponse', responseConstructor : KalturaRegionListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'region' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaBaseRegionFilter, subType : 'KalturaBaseRegionFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

