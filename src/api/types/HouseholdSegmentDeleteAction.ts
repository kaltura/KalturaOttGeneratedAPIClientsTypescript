
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdSegmentDeleteActionArgs  extends KalturaRequestArgs {
    householdId : number;
	segmentId : number;
}

/**
 * Build request payload for service 'householdSegment' action 'delete'.
 *
 * Usage: Deletes a segment from a household
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdSegmentDeleteAction extends KalturaRequest<boolean> {

    householdId : number;
	segmentId : number;

    constructor(data : HouseholdSegmentDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdsegment' },
				action : { type : 'c', default : 'delete' },
				householdId : { type : 'n' },
				segmentId : { type : 'n' }
            }
        );
        return result;
    }
}

