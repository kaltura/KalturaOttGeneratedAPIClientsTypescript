
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaChannel } from './KalturaChannel';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ChannelAddActionArgs  extends KalturaRequestArgs {
    channel : KalturaChannel;
}

/** 
* Insert new channel for partner. Currently supports only KSQL channel
**/
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

