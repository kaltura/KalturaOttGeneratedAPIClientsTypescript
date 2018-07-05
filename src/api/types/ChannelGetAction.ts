
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaChannel } from './KalturaChannel';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ChannelGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'channel' action 'get'.
 *
 * Usage: Returns channel
 *
 * Server response type:         KalturaChannel
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ChannelGetAction extends KalturaRequest<KalturaChannel> {

    id : number;

    constructor(data : ChannelGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

