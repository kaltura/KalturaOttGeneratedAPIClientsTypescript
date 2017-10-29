
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEngagementAdapter } from './KalturaEngagementAdapter';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EngagementAdapterAddActionArgs  extends KalturaRequestArgs {
    engagementAdapter : KalturaEngagementAdapter;
}

/**
 * Build request payload for service 'engagementAdapter' action 'add'.
 *
 * Usage: Insert new Engagement adapter for partner
 *
 * Server response type:         KalturaEngagementAdapter
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EngagementAdapterAddAction extends KalturaRequest<KalturaEngagementAdapter> {

    engagementAdapter : KalturaEngagementAdapter;

    constructor(data : EngagementAdapterAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEngagementAdapter', responseConstructor : KalturaEngagementAdapter  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'engagementadapter' },
				action : { type : 'c', default : 'add' },
				engagementAdapter : { type : 'o', subTypeConstructor : KalturaEngagementAdapter, subType : 'KalturaEngagementAdapter' }
            }
        );
        return result;
    }
}

