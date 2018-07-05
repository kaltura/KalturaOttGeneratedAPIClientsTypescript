
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkListResponse } from './KalturaBulkListResponse';

import { KalturaBulkFilter } from './KalturaBulkFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BulkListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaBulkFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'bulk' action 'list'.
 *
 * Usage: List bulk actions
 *
 * Server response type:         KalturaBulkListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BulkListAction extends KalturaRequest<KalturaBulkListResponse> {

    filter : KalturaBulkFilter;
	pager : KalturaFilterPager;

    constructor(data? : BulkListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkListResponse', responseConstructor : KalturaBulkListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'bulk' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaBulkFilter, subType : 'KalturaBulkFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

