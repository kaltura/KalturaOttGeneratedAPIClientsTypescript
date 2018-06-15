
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPersonalListListResponse } from './KalturaPersonalListListResponse';

import { KalturaPersonalListFilter } from './KalturaPersonalListFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PersonalListListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaPersonalListFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'personalList' action 'list'.
 *
 * Usage: List user&#39;s tv personal item to follow.
 * Possible status codes:
 *
 * Server response type:         KalturaPersonalListListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PersonalListListAction extends KalturaRequest<KalturaPersonalListListResponse> {

    filter : KalturaPersonalListFilter;
	pager : KalturaFilterPager;

    constructor(data? : PersonalListListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPersonalListListResponse', responseConstructor : KalturaPersonalListListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'personallist' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaPersonalListFilter, subType : 'KalturaPersonalListFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

