
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchHistoryListResponse } from './KalturaSearchHistoryListResponse';

import { KalturaSearchHistoryFilter } from './KalturaSearchHistoryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SearchHistoryListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaSearchHistoryFilter;
	pager? : KalturaFilterPager;
}

/** 
* Get user&#39;s last search requests
**/
export class SearchHistoryListAction extends KalturaRequest<KalturaSearchHistoryListResponse> {

    filter : KalturaSearchHistoryFilter;
	pager : KalturaFilterPager;

    constructor(data? : SearchHistoryListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSearchHistoryListResponse', responseConstructor : KalturaSearchHistoryListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'searchhistory' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaSearchHistoryFilter, subType : 'KalturaSearchHistoryFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

