
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFollowTvSeriesListResponse } from './KalturaFollowTvSeriesListResponse';

import { KalturaFollowTvSeriesFilter } from './KalturaFollowTvSeriesFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FollowTvSeriesListActionArgs  extends KalturaRequestArgs {
    filter : KalturaFollowTvSeriesFilter;
	pager? : KalturaFilterPager;
}

/** 
* List user&#39;s tv series follows.              Possible status codes:
**/
export class FollowTvSeriesListAction extends KalturaRequest<KalturaFollowTvSeriesListResponse> {

    filter : KalturaFollowTvSeriesFilter;
	pager : KalturaFilterPager;

    constructor(data : FollowTvSeriesListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFollowTvSeriesListResponse', responseConstructor : KalturaFollowTvSeriesListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'followtvseries' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaFollowTvSeriesFilter, subType : 'KalturaFollowTvSeriesFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

