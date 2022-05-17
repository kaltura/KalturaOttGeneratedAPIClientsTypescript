
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveToVodPartnerConfiguration } from './KalturaLiveToVodPartnerConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveToVodGetPartnerConfigurationActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'liveToVod' action 'getPartnerConfiguration'.
 *
 * Usage: Get existing L2V partner configuration
 *
 * Server response type:         KalturaLiveToVodPartnerConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveToVodGetPartnerConfigurationAction extends KalturaRequest<KalturaLiveToVodPartnerConfiguration> {

    

    constructor(data? : LiveToVodGetPartnerConfigurationActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveToVodPartnerConfiguration', responseConstructor : KalturaLiveToVodPartnerConfiguration  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livetovod' },
				action : { type : 'c', default : 'getPartnerConfiguration' }
            }
        );
        return result;
    }
}

