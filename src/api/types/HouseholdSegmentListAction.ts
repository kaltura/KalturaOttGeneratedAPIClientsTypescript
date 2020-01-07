
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdSegmentListResponse } from './KalturaHouseholdSegmentListResponse';

import { KalturaHouseholdSegmentFilter } from './KalturaHouseholdSegmentFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdSegmentListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaHouseholdSegmentFilter;
}

/**
 * Build request payload for service 'householdSegment' action 'list'.
 *
 * Usage: Gets all HouseholdSegment items for a household
 *
 * Server response type:         KalturaHouseholdSegmentListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdSegmentListAction extends KalturaRequest<KalturaHouseholdSegmentListResponse> {

    filter : KalturaHouseholdSegmentFilter;

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
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaHouseholdSegmentFilter, subType : 'KalturaHouseholdSegmentFilter' }
            }
        );
        return result;
    }
}

