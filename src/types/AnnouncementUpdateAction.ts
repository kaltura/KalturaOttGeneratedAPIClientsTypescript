
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAnnouncement } from './KalturaAnnouncement';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnouncementUpdateActionArgs  extends KalturaRequestArgs {
    announcementId : number;
	announcement : KalturaAnnouncement;
}

/**
 * Build request payload for service 'announcement' action 'update'.
 *
 * Usage: Update an existing future system announcement push notification. Announcement can only be updated only before sending
 *
 * Server response type:         KalturaAnnouncement
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
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

