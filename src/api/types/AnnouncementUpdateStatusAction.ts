
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnouncementUpdateStatusActionArgs  extends KalturaRequestArgs {
    id : number;
	status : boolean;
}

/**
 * Build request payload for service 'announcement' action 'updateStatus'.
 *
 * Usage: Update a system announcement status
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AnnouncementUpdateStatusAction extends KalturaRequest<boolean> {

    id : number;
	status : boolean;

    constructor(data : AnnouncementUpdateStatusActionArgs)
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
				action : { type : 'c', default : 'updateStatus' },
				id : { type : 'n' },
				status : { type : 'b' }
            }
        );
        return result;
    }
}

