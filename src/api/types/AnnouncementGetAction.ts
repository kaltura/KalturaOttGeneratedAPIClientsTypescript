
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAnnouncement } from './KalturaAnnouncement';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnouncementGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'announcement' action 'get'.
 *
 * Usage: Get announcement by Id
 *
 * Server response type:         KalturaAnnouncement
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AnnouncementGetAction extends KalturaRequest<KalturaAnnouncement> {

    id : number;

    constructor(data : AnnouncementGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

