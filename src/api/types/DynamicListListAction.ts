
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDynamicListListResponse } from './KalturaDynamicListListResponse';

import { KalturaDynamicListFilter } from './KalturaDynamicListFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DynamicListListActionArgs  extends KalturaRequestArgs {
    filter : KalturaDynamicListFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'dynamicList' action 'list'.
 *
 * Usage: Returns the list of available DynamicList
 *
 * Server response type:         KalturaDynamicListListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DynamicListListAction extends KalturaRequest<KalturaDynamicListListResponse> {

    filter : KalturaDynamicListFilter;
	pager : KalturaFilterPager;

    constructor(data : DynamicListListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDynamicListListResponse', responseConstructor : KalturaDynamicListListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'dynamiclist' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaDynamicListFilter, subType : 'KalturaDynamicListFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

