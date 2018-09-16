
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserSegment } from './KalturaUserSegment';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserSegmentAddActionArgs  extends KalturaRequestArgs {
    userSegment : KalturaUserSegment;
}

/**
 * Build request payload for service 'userSegment' action 'add'.
 *
 * Usage: Adds a segment to a user
 *
 * Server response type:         KalturaUserSegment
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserSegmentAddAction extends KalturaRequest<KalturaUserSegment> {

    userSegment : KalturaUserSegment;

    constructor(data : UserSegmentAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserSegment', responseConstructor : KalturaUserSegment  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'usersegment' },
				action : { type : 'c', default : 'add' },
				userSegment : { type : 'o', subTypeConstructor : KalturaUserSegment, subType : 'KalturaUserSegment' }
            }
        );
        return result;
    }
}

