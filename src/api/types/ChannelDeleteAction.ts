
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ChannelDeleteActionArgs  extends KalturaRequestArgs {
    channelId : number;
}

/**
 * Build request payload for service 'channel' action 'delete'.
 *
 * Usage: Delete channel by its channel id
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ChannelDeleteAction extends KalturaRequest<boolean> {

    channelId : number;

    constructor(data : ChannelDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'channel' },
				action : { type : 'c', default : 'delete' },
				channelId : { type : 'n' }
            }
        );
        return result;
    }
}

