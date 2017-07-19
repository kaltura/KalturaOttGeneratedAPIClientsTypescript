
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntitlementListResponse } from './KalturaEntitlementListResponse';

import { KalturaEntitlementFilter } from './KalturaEntitlementFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntitlementListActionArgs  extends KalturaRequestArgs {
    filter : KalturaEntitlementFilter;
	pager? : KalturaFilterPager;
}

/** 
* Gets all the entitled media items for a household
**/
export class EntitlementListAction extends KalturaRequest<KalturaEntitlementListResponse> {

    filter : KalturaEntitlementFilter;
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
				filter : { type : 'o', subTypeConstructor : KalturaEntitlementFilter, subType : 'KalturaEntitlementFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

