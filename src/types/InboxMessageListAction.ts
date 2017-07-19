
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaInboxMessageListResponse } from './KalturaInboxMessageListResponse';

import { KalturaInboxMessageFilter } from './KalturaInboxMessageFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface InboxMessageListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaInboxMessageFilter;
	pager? : KalturaFilterPager;
}

/** 
* List inbox messages
**/
export class InboxMessageListAction extends KalturaRequest<KalturaInboxMessageListResponse> {

    filter : KalturaInboxMessageFilter;
	pager : KalturaFilterPager;

    constructor(data? : InboxMessageListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaInboxMessageListResponse', responseConstructor : KalturaInboxMessageListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'inboxmessage' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaInboxMessageFilter, subType : 'KalturaInboxMessageFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

