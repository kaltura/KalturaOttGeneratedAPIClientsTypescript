
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCollectionListResponse } from './KalturaCollectionListResponse';

import { KalturaCollectionFilter } from './KalturaCollectionFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CollectionListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCollectionFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'collection' action 'list'.
 *
 * Usage: Returns a list of collections requested by Collection IDs or file identifier or coupon group identifier
 *
 * Server response type:         KalturaCollectionListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CollectionListAction extends KalturaRequest<KalturaCollectionListResponse> {

    filter : KalturaCollectionFilter;
	pager : KalturaFilterPager;

    constructor(data? : CollectionListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCollectionListResponse', responseConstructor : KalturaCollectionListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'collection' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaCollectionFilter, subType : 'KalturaCollectionFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

