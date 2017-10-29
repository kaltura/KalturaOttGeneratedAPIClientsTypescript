
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEngagementAdapter } from './KalturaEngagementAdapter';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EngagementAdapterUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	engagementAdapter : KalturaEngagementAdapter;
}

/**
 * Build request payload for service 'engagementAdapter' action 'update'.
 *
 * Usage: Update Engagement adapter details
 *
 * Server response type:         KalturaEngagementAdapter
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EngagementAdapterUpdateAction extends KalturaRequest<KalturaEngagementAdapter> {

    id : number;
	engagementAdapter : KalturaEngagementAdapter;

    constructor(data : EngagementAdapterUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				engagementAdapter : { type : 'o', subTypeConstructor : KalturaEngagementAdapter, subType : 'KalturaEngagementAdapter' }
            }
        );
        return result;
    }
}

