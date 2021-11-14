
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchPriorityGroupListResponse } from './KalturaSearchPriorityGroupListResponse';

import { KalturaSearchPriorityGroupFilter } from './KalturaSearchPriorityGroupFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SearchPriorityGroupListActionArgs  extends KalturaRequestArgs {
    filter : KalturaSearchPriorityGroupFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'searchPriorityGroup' action 'list'.
 *
 * Usage: Gets list of search priority groups which meet the filter criteria
 *
 * Server response type:         KalturaSearchPriorityGroupListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SearchPriorityGroupListAction extends KalturaRequest<KalturaSearchPriorityGroupListResponse> {

    filter : KalturaSearchPriorityGroupFilter;
	pager : KalturaFilterPager;

    constructor(data : SearchPriorityGroupListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSearchPriorityGroupListResponse', responseConstructor : KalturaSearchPriorityGroupListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'searchprioritygroup' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaSearchPriorityGroupFilter, subType : 'KalturaSearchPriorityGroupFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

