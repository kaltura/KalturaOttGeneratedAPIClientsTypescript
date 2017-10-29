
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEngagement } from './KalturaEngagement';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EngagementGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'engagement' action 'get'.
 *
 * Usage: Return engagement
 *
 * Server response type:         KalturaEngagement
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EngagementGetAction extends KalturaRequest<KalturaEngagement> {

    id : number;

    constructor(data : EngagementGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

