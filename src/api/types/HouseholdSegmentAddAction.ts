
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdSegment } from './KalturaHouseholdSegment';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdSegmentAddActionArgs  extends KalturaRequestArgs {
    householdSegment : KalturaHouseholdSegment;
}

/**
 * Build request payload for service 'householdSegment' action 'add'.
 *
 * Usage: Adds a segment to a household
 *
 * Server response type:         KalturaHouseholdSegment
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdSegmentAddAction extends KalturaRequest<KalturaHouseholdSegment> {

    householdSegment : KalturaHouseholdSegment;

    constructor(data : HouseholdSegmentAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHouseholdSegment', responseConstructor : KalturaHouseholdSegment  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'householdsegment' },
				action : { type : 'c', default : 'add' },
				householdSegment : { type : 'o', subTypeConstructor : KalturaHouseholdSegment, subType : 'KalturaHouseholdSegment' }
            }
        );
        return result;
    }
}

