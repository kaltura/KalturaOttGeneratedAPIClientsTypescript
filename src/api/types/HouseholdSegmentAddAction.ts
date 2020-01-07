
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdSegment } from './KalturaHouseholdSegment';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdSegmentAddActionArgs  extends KalturaRequestArgs {
    objectToAdd : KalturaHouseholdSegment;
}

/**
 * Build request payload for service 'householdSegment' action 'add'.
 *
 * Usage: householdSegment add
 *
 * Server response type:         KalturaHouseholdSegment
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdSegmentAddAction extends KalturaRequest<KalturaHouseholdSegment> {

    objectToAdd : KalturaHouseholdSegment;

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
				objectToAdd : { type : 'o', subTypeConstructor : KalturaHouseholdSegment, subType : 'KalturaHouseholdSegment' }
            }
        );
        return result;
    }
}

