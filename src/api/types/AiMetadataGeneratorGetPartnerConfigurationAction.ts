
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAiMetadataGeneratorConfiguration } from './KalturaAiMetadataGeneratorConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AiMetadataGeneratorGetPartnerConfigurationActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'aiMetadataGenerator' action 'getPartnerConfiguration'.
 *
 * Usage: Get the metadata generation configuration
 *
 * Server response type:         KalturaAiMetadataGeneratorConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AiMetadataGeneratorGetPartnerConfigurationAction extends KalturaRequest<KalturaAiMetadataGeneratorConfiguration> {

    

    constructor(data? : AiMetadataGeneratorGetPartnerConfigurationActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAiMetadataGeneratorConfiguration', responseConstructor : KalturaAiMetadataGeneratorConfiguration  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'aimetadatagenerator' },
				action : { type : 'c', default : 'getPartnerConfiguration' }
            }
        );
        return result;
    }
}

