
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaChannel } from './KalturaChannel';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ChannelUpdateActionArgs  extends KalturaRequestArgs {
    channelId : number;
	channel : KalturaChannel;
}

/**
 * Build request payload for service 'channel' action 'update'.
 *
 * Usage: Update channel details. Currently supports only KSQL channel
 *
 * Server response type:         KalturaChannel
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ChannelUpdateAction extends KalturaRequest<KalturaChannel> {

    channelId : number;
	channel : KalturaChannel;

    constructor(data : ChannelUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				channelId : { type : 'n' },
				channel : { type : 'o', subTypeConstructor : KalturaChannel, subType : 'KalturaChannel' }
            }
        );
        return result;
    }
}

