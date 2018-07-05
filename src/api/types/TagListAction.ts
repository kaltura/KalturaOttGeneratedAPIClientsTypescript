
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTagListResponse } from './KalturaTagListResponse';

import { KalturaTagFilter } from './KalturaTagFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TagListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaTagFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'tag' action 'list'.
 *
 * Usage: Get the list of tags for the partner
 *
 * Server response type:         KalturaTagListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TagListAction extends KalturaRequest<KalturaTagListResponse> {

    filter : KalturaTagFilter;
	pager : KalturaFilterPager;

    constructor(data? : TagListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaTagListResponse', responseConstructor : KalturaTagListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'tag' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaTagFilter, subType : 'KalturaTagFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

