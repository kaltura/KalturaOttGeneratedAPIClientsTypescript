
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveToVodLinearAssetConfiguration } from './KalturaLiveToVodLinearAssetConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveToVodGetLinearAssetConfigurationActionArgs  extends KalturaRequestArgs {
    linearAssetId : number;
}

/**
 * Build request payload for service 'liveToVod' action 'getLinearAssetConfiguration'.
 *
 * Usage: Get existing L2V configuration for a specific linear asset
 *
 * Server response type:         KalturaLiveToVodLinearAssetConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LiveToVodGetLinearAssetConfigurationAction extends KalturaRequest<KalturaLiveToVodLinearAssetConfiguration> {

    linearAssetId : number;

    constructor(data : LiveToVodGetLinearAssetConfigurationActionArgs)
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
				action : { type : 'c', default : 'getLinearAssetConfiguration' },
				linearAssetId : { type : 'n' }
            }
        );
        return result;
    }
}

