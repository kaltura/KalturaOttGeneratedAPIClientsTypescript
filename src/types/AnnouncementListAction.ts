
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAnnouncementListResponse } from './KalturaAnnouncementListResponse';

import { KalturaAnnouncementFilter } from './KalturaAnnouncementFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnouncementListActionArgs  extends KalturaRequestArgs {
    filter : KalturaAnnouncementFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'announcement' action 'list'.
 *
 * Usage: Lists all announcements in the system
 *
 * Server response type:         KalturaAnnouncementListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AnnouncementListAction extends KalturaRequest<KalturaAnnouncementListResponse> {

    filter : KalturaAnnouncementFilter;
	pager : KalturaFilterPager;

    constructor(data : AnnouncementListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAnnouncementListResponse', responseConstructor : KalturaAnnouncementListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'announcement' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaAnnouncementFilter, subType : 'KalturaAnnouncementFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

