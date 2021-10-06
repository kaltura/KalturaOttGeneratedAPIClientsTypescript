
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEpgServicePartnerConfiguration } from './KalturaEpgServicePartnerConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EpgServicePartnerConfigurationGetActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'epgServicePartnerConfiguration' action 'get'.
 *
 * Usage: Returns EPG cache service partner configurations
 *
 * Server response type:         KalturaEpgServicePartnerConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EpgServicePartnerConfigurationGetAction extends KalturaRequest<KalturaEpgServicePartnerConfiguration> {

    

    constructor(data? : EpgServicePartnerConfigurationGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEpgServicePartnerConfiguration', responseConstructor : KalturaEpgServicePartnerConfiguration  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'epgservicepartnerconfiguration' },
				action : { type : 'c', default : 'get' }
            }
        );
        return result;
    }
}

