
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRecordingListResponse } from './KalturaRecordingListResponse';

import { KalturaRecordingFilter } from './KalturaRecordingFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RecordingListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaRecordingFilter;
	pager? : KalturaFilterPager;
}

/** 
* Return a list of recordings for the household with optional filter by status and
* KSQL.
**/
export class RecordingListAction extends KalturaRequest<KalturaRecordingListResponse> {

    filter : KalturaRecordingFilter;
	pager : KalturaFilterPager;

    constructor(data? : RecordingListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRecordingListResponse', responseConstructor : KalturaRecordingListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'recording' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaRecordingFilter, subType : 'KalturaRecordingFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

