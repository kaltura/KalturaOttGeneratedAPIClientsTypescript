
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserSegmentDeleteActionArgs  extends KalturaRequestArgs {
    userId : string;
	segmentId : number;
}

/**
 * Build request payload for service 'userSegment' action 'delete'.
 *
 * Usage: Deletes a segment from a user
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserSegmentDeleteAction extends KalturaRequest<boolean> {

    userId : string;
	segmentId : number;

    constructor(data : UserSegmentDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'usersegment' },
				action : { type : 'c', default : 'delete' },
				userId : { type : 's' },
				segmentId : { type : 'n' }
            }
        );
        return result;
    }
}

