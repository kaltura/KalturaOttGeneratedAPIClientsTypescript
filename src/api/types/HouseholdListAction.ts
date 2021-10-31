
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdListResponse } from './KalturaHouseholdListResponse';

import { KalturaHouseholdFilter } from './KalturaHouseholdFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdListActionArgs  extends KalturaRequestArgs {
    filter : KalturaHouseholdFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'household' action 'list'.
 *
 * Usage: Retrive household for the partner filter by external identifier
 *
 * Server response type:         KalturaHouseholdListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdListAction extends KalturaRequest<KalturaHouseholdListResponse> {

    filter : KalturaHouseholdFilter;
	pager : KalturaFilterPager;

    constructor(data : HouseholdListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHouseholdListResponse', responseConstructor : KalturaHouseholdListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'household' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaHouseholdFilter, subType : 'KalturaHouseholdFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

