
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveToVodPartnerConfiguration } from './KalturaLiveToVodPartnerConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveToVodUpdatePartnerConfigurationActionArgs  extends KalturaRequestArgs {
    configuration : KalturaLiveToVodPartnerConfiguration;
}

/**
 * Build request payload for service 'liveToVod' action 'updatePartnerConfiguration'.
 *
 * Usage: Set L2V configuration on the partner level
 *
 * Server response type:         KalturaLiveToVodPartnerConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveToVodUpdatePartnerConfigurationAction extends KalturaRequest<KalturaLiveToVodPartnerConfiguration> {

    configuration : KalturaLiveToVodPartnerConfiguration;

    constructor(data : LiveToVodUpdatePartnerConfigurationActionArgs)
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
				action : { type : 'c', default : 'updatePartnerConfiguration' },
				configuration : { type : 'o', subTypeConstructor : KalturaLiveToVodPartnerConfiguration, subType : 'KalturaLiveToVodPartnerConfiguration' }
            }
        );
        return result;
    }
}

