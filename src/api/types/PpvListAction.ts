
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPpvListResponse } from './KalturaPpvListResponse';

import { KalturaPpvFilter } from './KalturaPpvFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PpvListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaPpvFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'ppv' action 'list'.
 *
 * Usage: Returns all ppv objects
 *
 * Server response type:         KalturaPpvListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PpvListAction extends KalturaRequest<KalturaPpvListResponse> {

    filter : KalturaPpvFilter;
	pager : KalturaFilterPager;

    constructor(data? : PpvListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPpvListResponse', responseConstructor : KalturaPpvListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ppv' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaPpvFilter, subType : 'KalturaPpvFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

