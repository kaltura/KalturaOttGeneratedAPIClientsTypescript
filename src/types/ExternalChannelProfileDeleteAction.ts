
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExternalChannelProfileDeleteActionArgs  extends KalturaRequestArgs {
    externalChannelId : number;
}

/**
 * Build request payload for service 'externalChannelProfile' action 'delete'.
 *
 * Usage: Delete External channel by External channel id
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ExternalChannelProfileDeleteAction extends KalturaRequest<boolean> {

    externalChannelId : number;

    constructor(data : ExternalChannelProfileDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'externalchannelprofile' },
				action : { type : 'c', default : 'delete' },
				externalChannelId : { type : 'n' }
            }
        );
        return result;
    }
}

