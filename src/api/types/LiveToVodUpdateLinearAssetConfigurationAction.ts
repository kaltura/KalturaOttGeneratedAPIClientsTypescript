
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveToVodLinearAssetConfiguration } from './KalturaLiveToVodLinearAssetConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveToVodUpdateLinearAssetConfigurationActionArgs  extends KalturaRequestArgs {
    configuration : KalturaLiveToVodLinearAssetConfiguration;
}

/**
 * Build request payload for service 'liveToVod' action 'updateLinearAssetConfiguration'.
 *
 * Usage: Set L2V configuration for a specific Linear channel
 *
 * Server response type:         KalturaLiveToVodLinearAssetConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveToVodUpdateLinearAssetConfigurationAction extends KalturaRequest<KalturaLiveToVodLinearAssetConfiguration> {

    configuration : KalturaLiveToVodLinearAssetConfiguration;

    constructor(data : LiveToVodUpdateLinearAssetConfigurationActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLiveToVodLinearAssetConfiguration', responseConstructor : KalturaLiveToVodLinearAssetConfiguration  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'livetovod' },
				action : { type : 'c', default : 'updateLinearAssetConfiguration' },
				configuration : { type : 'o', subTypeConstructor : KalturaLiveToVodLinearAssetConfiguration, subType : 'KalturaLiveToVodLinearAssetConfiguration' }
            }
        );
        return result;
    }
}

