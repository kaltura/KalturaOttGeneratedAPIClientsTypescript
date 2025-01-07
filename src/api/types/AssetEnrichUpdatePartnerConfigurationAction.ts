
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetaEnrichConfiguration } from './KalturaMetaEnrichConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetEnrichUpdatePartnerConfigurationActionArgs  extends KalturaRequestArgs {
    configuration : KalturaMetaEnrichConfiguration;
}

/**
 * Build request payload for service 'assetEnrich' action 'updatePartnerConfiguration'.
 *
 * Usage: update feature configuration
 *
 * Server response type:         KalturaMetaEnrichConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetEnrichUpdatePartnerConfigurationAction extends KalturaRequest<KalturaMetaEnrichConfiguration> {

    configuration : KalturaMetaEnrichConfiguration;

    constructor(data : AssetEnrichUpdatePartnerConfigurationActionArgs)
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
				action : { type : 'c', default : 'updatePartnerConfiguration' },
				configuration : { type : 'o', subTypeConstructor : KalturaMetaEnrichConfiguration, subType : 'KalturaMetaEnrichConfiguration' }
            }
        );
        return result;
    }
}

