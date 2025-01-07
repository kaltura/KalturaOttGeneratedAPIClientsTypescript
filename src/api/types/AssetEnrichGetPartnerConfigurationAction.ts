
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetaEnrichConfiguration } from './KalturaMetaEnrichConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetEnrichGetPartnerConfigurationActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'assetEnrich' action 'getPartnerConfiguration'.
 *
 * Usage: retrieve feature configuration
 *
 * Server response type:         KalturaMetaEnrichConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetEnrichGetPartnerConfigurationAction extends KalturaRequest<KalturaMetaEnrichConfiguration> {

    

    constructor(data? : AssetEnrichGetPartnerConfigurationActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMetaEnrichConfiguration', responseConstructor : KalturaMetaEnrichConfiguration  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetenrich' },
				action : { type : 'c', default : 'getPartnerConfiguration' }
            }
        );
        return result;
    }
}

