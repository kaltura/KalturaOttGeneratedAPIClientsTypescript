
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetaListResponse } from './KalturaMetaListResponse';

import { KalturaMetaFilter } from './KalturaMetaFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetaListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaMetaFilter;
}

/**
 * Build request payload for service 'meta' action 'list'.
 *
 * Usage: Return a list of metas for the account with optional filter
 *
 * Server response type:         KalturaMetaListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MetaListAction extends KalturaRequest<KalturaMetaListResponse> {

    filter : KalturaMetaFilter;

    constructor(data? : MetaListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMetaListResponse', responseConstructor : KalturaMetaListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'meta' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaMetaFilter, subType : 'KalturaMetaFilter' }
            }
        );
        return result;
    }
}

