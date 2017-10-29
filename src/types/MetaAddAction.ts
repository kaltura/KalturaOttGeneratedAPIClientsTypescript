
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMeta } from './KalturaMeta';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetaAddActionArgs  extends KalturaRequestArgs {
    meta : KalturaMeta;
}

/**
 * Build request payload for service 'meta' action 'add'.
 *
 * Usage: Add a new meta
 *
 * Server response type:         KalturaMeta
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MetaAddAction extends KalturaRequest<KalturaMeta> {

    meta : KalturaMeta;

    constructor(data : MetaAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				meta : { type : 'o', subTypeConstructor : KalturaMeta, subType : 'KalturaMeta' }
            }
        );
        return result;
    }
}

