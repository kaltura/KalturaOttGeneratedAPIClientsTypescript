
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEpgListResponse } from './KalturaEpgListResponse';

import { KalturaEpgFilter } from './KalturaEpgFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EpgListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaEpgFilter;
}

/**
 * Build request payload for service 'epg' action 'list'.
 *
 * Usage: Returns EPG assets
 *
 * Server response type:         KalturaEpgListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EpgListAction extends KalturaRequest<KalturaEpgListResponse> {

    filter : KalturaEpgFilter;

    constructor(data? : EpgListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEpgListResponse', responseConstructor : KalturaEpgListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'epg' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaEpgFilter, subType : 'KalturaEpgFilter' }
            }
        );
        return result;
    }
}

