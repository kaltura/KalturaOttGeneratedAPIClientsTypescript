
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaChannel } from './KalturaChannel';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ChannelAddActionArgs  extends KalturaRequestArgs {
    channel : KalturaChannel;
}

/**
 * Build request payload for service 'channel' action 'add'.
 *
 * Usage: Insert new channel for partner. Supports KalturaDynamicChannel or KalturaManualChannel
 *
 * Server response type:         KalturaChannel
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ChannelAddAction extends KalturaRequest<KalturaChannel> {

    channel : KalturaChannel;

    constructor(data : ChannelAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaChannel', responseConstructor : KalturaChannel  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'channel' },
				action : { type : 'c', default : 'add' },
				channel : { type : 'o', subTypeConstructor : KalturaChannel, subType : 'KalturaChannel' }
            }
        );
        return result;
    }
}

