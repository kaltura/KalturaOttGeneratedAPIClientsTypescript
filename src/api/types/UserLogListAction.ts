
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserLogListResponse } from './KalturaUserLogListResponse';

import { KalturaUserLogFilter } from './KalturaUserLogFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserLogListActionArgs  extends KalturaRequestArgs {
    filter : KalturaUserLogFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'userLog' action 'list'.
 *
 * Usage: Retrieves a list of user log entries matching the specified filter criteria
 *
 * Server response type:         KalturaUserLogListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserLogListAction extends KalturaRequest<KalturaUserLogListResponse> {

    filter : KalturaUserLogFilter;
	pager : KalturaFilterPager;

    constructor(data : UserLogListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserLogListResponse', responseConstructor : KalturaUserLogListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userlog' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaUserLogFilter, subType : 'KalturaUserLogFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

