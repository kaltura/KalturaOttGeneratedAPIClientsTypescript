
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdSegmentListResponse } from './KalturaHouseholdSegmentListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdSegmentListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'householdSegment' action 'list'.
 *
 * Usage: Retrieve all the segments that apply for given household
 *
 * Server response type:         KalturaHouseholdSegmentListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdSegmentListAction extends KalturaRequest<KalturaHouseholdSegmentListResponse> {

    

    constructor(data? : HouseholdSegmentListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHouseholdSegmentListResponse', responseConstructor : KalturaHouseholdSegmentListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdsegment' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

