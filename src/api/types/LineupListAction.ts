
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLineupChannelAssetListResponse } from './KalturaLineupChannelAssetListResponse';

import { KalturaLineupRegionalChannelFilter } from './KalturaLineupRegionalChannelFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LineupListActionArgs  extends KalturaRequestArgs {
    filter : KalturaLineupRegionalChannelFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'lineup' action 'list'.
 *
 * Usage: Returns list of lineup regional linear channels associated with one LCN and its region information. Allows to apply sorting and filtering by LCN and linear channels
 *
 * Server response type:         KalturaLineupChannelAssetListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LineupListAction extends KalturaRequest<KalturaLineupChannelAssetListResponse> {

    filter : KalturaLineupRegionalChannelFilter;
	pager : KalturaFilterPager;

    constructor(data : LineupListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLineupChannelAssetListResponse', responseConstructor : KalturaLineupChannelAssetListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'lineup' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaLineupRegionalChannelFilter, subType : 'KalturaLineupRegionalChannelFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

