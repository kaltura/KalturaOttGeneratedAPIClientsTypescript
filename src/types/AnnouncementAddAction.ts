
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAnnouncement } from './KalturaAnnouncement';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnouncementAddActionArgs  extends KalturaRequestArgs {
    announcement : KalturaAnnouncement;
}

/** 
* Add a new future scheduled system announcement push notification
**/
export class AnnouncementAddAction extends KalturaRequest<KalturaAnnouncement> {

    announcement : KalturaAnnouncement;

    constructor(data : AnnouncementAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				announcement : { type : 'o', subTypeConstructor : KalturaAnnouncement, subType : 'KalturaAnnouncement' }
            }
        );
        return result;
    }
}

