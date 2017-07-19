
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnouncementDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete an existing announcing. Announcement cannot be delete while being sent.
**/
export class AnnouncementDeleteAction extends KalturaRequest<boolean> {

    id : number;

    constructor(data : AnnouncementDeleteActionArgs)
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
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

