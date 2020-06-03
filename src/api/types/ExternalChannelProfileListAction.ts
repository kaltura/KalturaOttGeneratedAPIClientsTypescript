
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalChannelProfileListResponse } from './KalturaExternalChannelProfileListResponse';

import { KalturaExternalChannelProfileFilter } from './KalturaExternalChannelProfileFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExternalChannelProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaExternalChannelProfileFilter;
}

/**
 * Build request payload for service 'externalChannelProfile' action 'list'.
 *
 * Usage: Returns all External channels for partner
 *
 * Server response type:         KalturaExternalChannelProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ExternalChannelProfileListAction extends KalturaRequest<KalturaExternalChannelProfileListResponse> {

    filter : KalturaExternalChannelProfileFilter;

    constructor(data? : ExternalChannelProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaExternalChannelProfileListResponse', responseConstructor : KalturaExternalChannelProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'externalchannelprofile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaExternalChannelProfileFilter, subType : 'KalturaExternalChannelProfileFilter' }
            }
        );
        return result;
    }
}

