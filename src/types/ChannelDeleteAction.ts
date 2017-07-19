
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ChannelDeleteActionArgs  extends KalturaRequestArgs {
    channelId : number;
}

/** 
* Delete channel by its channel id
**/
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

