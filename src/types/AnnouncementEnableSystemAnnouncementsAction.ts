
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnouncementEnableSystemAnnouncementsActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'announcement' action 'enableSystemAnnouncements'.
 *
 * Usage: Enable system announcements
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AnnouncementEnableSystemAnnouncementsAction extends KalturaRequest<boolean> {

    

    constructor(data? : AnnouncementEnableSystemAnnouncementsActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'announcement' },
				action : { type : 'c', default : 'enableSystemAnnouncements' }
            }
        );
        return result;
    }
}

