
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveToVodFullConfiguration } from './KalturaLiveToVodFullConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveToVodGetConfigurationActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'liveToVod' action 'getConfiguration'.
 *
 * Usage: Get existing L2V configuration for both the partner level and all channels level
 *
 * Server response type:         KalturaLiveToVodFullConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveToVodGetConfigurationAction extends KalturaRequest<KalturaLiveToVodFullConfiguration> {

    

    constructor(data? : LiveToVodGetConfigurationActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveToVodFullConfiguration', responseConstructor : KalturaLiveToVodFullConfiguration  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livetovod' },
				action : { type : 'c', default : 'getConfiguration' }
            }
        );
        return result;
    }
}

