
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEngagement } from './KalturaEngagement';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EngagementAddActionArgs  extends KalturaRequestArgs {
    engagement : KalturaEngagement;
}

/**
 * Build request payload for service 'engagement' action 'add'.
 *
 * Usage: Insert new Engagement for partner
 *
 * Server response type:         KalturaEngagement
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EngagementAddAction extends KalturaRequest<KalturaEngagement> {

    engagement : KalturaEngagement;

    constructor(data : EngagementAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEngagement', responseConstructor : KalturaEngagement  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'engagement' },
				action : { type : 'c', default : 'add' },
				engagement : { type : 'o', subTypeConstructor : KalturaEngagement, subType : 'KalturaEngagement' }
            }
        );
        return result;
    }
}

