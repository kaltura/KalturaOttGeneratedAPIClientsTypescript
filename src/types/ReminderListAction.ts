
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReminderListResponse } from './KalturaReminderListResponse';

import { KalturaReminderFilter } from './KalturaReminderFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReminderListActionArgs  extends KalturaRequestArgs {
    filter : KalturaReminderFilter;
	pager? : KalturaFilterPager;
}

/** 
* Return a list of reminders with optional filter by KSQL.
**/
export class ReminderListAction extends KalturaRequest<KalturaReminderListResponse> {

    filter : KalturaReminderFilter;
	pager : KalturaFilterPager;

    constructor(data : ReminderListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaReminderListResponse', responseConstructor : KalturaReminderListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reminder' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaReminderFilter, subType : 'KalturaReminderFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

