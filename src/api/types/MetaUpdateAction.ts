
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMeta } from './KalturaMeta';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetaUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	meta : KalturaMeta;
}

/**
 * Build request payload for service 'meta' action 'update'.
 *
 * Usage: Update meta&#39;s user interest
 *
 * Server response type:         KalturaMeta
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MetaUpdateAction extends KalturaRequest<KalturaMeta> {

    id : string;
	meta : KalturaMeta;

    constructor(data : MetaUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMeta', responseConstructor : KalturaMeta  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'meta' },
				action : { type : 'c', default : 'update' },
				id : { type : 's' },
				meta : { type : 'o', subTypeConstructor : KalturaMeta, subType : 'KalturaMeta' }
            }
        );
        return result;
    }
}

