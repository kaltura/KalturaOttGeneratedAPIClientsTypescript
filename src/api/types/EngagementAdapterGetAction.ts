
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEngagementAdapter } from './KalturaEngagementAdapter';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EngagementAdapterGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'engagementAdapter' action 'get'.
 *
 * Usage: Returns all Engagement adapters for partner : id + name
 *
 * Server response type:         KalturaEngagementAdapter
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EngagementAdapterGetAction extends KalturaRequest<KalturaEngagementAdapter> {

    id : number;

    constructor(data : EngagementAdapterGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

