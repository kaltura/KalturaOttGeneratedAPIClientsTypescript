
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAnnouncement } from './KalturaAnnouncement';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnouncementUpdateActionArgs  extends KalturaRequestArgs {
    announcementId : number;
	announcement : KalturaAnnouncement;
}

/** 
* Update an existing future system announcement push notification. Announcement
* can only be updated only before sending
**/
export class AnnouncementUpdateAction extends KalturaRequest<KalturaAnnouncement> {

    announcementId : number;
	announcement : KalturaAnnouncement;

    constructor(data : AnnouncementUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAnnouncement', responseConstructor : KalturaAnnouncement  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'announcement' },
				action : { type : 'c', default : 'update' },
				announcementId : { type : 'n' },
				announcement : { type : 'o', subTypeConstructor : KalturaAnnouncement, subType : 'KalturaAnnouncement' }
            }
        );
        return result;
    }
}

