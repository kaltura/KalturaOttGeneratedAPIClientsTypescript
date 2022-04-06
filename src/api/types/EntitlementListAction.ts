
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntitlementListResponse } from './KalturaEntitlementListResponse';

import { KalturaBaseEntitlementFilter } from './KalturaBaseEntitlementFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntitlementListActionArgs  extends KalturaRequestArgs {
    filter : KalturaBaseEntitlementFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'entitlement' action 'list'.
 *
 * Usage: Gets all the entitled media items for a household
 *
 * Server response type:         KalturaEntitlementListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntitlementListAction extends KalturaRequest<KalturaEntitlementListResponse> {

    filter : KalturaBaseEntitlementFilter;
	pager : KalturaFilterPager;

    constructor(data : EntitlementListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEntitlementListResponse', responseConstructor : KalturaEntitlementListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'entitlement' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaBaseEntitlementFilter, subType : 'KalturaBaseEntitlementFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

