
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaChannelListResponse } from './KalturaChannelListResponse';

import { KalturaChannelsFilter } from './KalturaChannelsFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ChannelListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaChannelsFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'channel' action 'list'.
 *
 * Usage: Get the list of tags for the partner
 *
 * Server response type:         KalturaChannelListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ChannelListAction extends KalturaRequest<KalturaChannelListResponse> {

    filter : KalturaChannelsFilter;
	pager : KalturaFilterPager;

    constructor(data? : ChannelListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaChannelListResponse', responseConstructor : KalturaChannelListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'channel' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaChannelsFilter, subType : 'KalturaChannelsFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

