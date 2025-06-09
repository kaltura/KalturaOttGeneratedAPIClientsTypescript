
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAiMetadataGeneratorConfiguration } from './KalturaAiMetadataGeneratorConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AiMetadataGeneratorUpdatePartnerConfigurationActionArgs  extends KalturaRequestArgs {
    configuration : KalturaAiMetadataGeneratorConfiguration;
}

/**
 * Build request payload for service 'aiMetadataGenerator' action 'updatePartnerConfiguration'.
 *
 * Usage: Update/set the metadata generation configuration
 *
 * Server response type:         KalturaAiMetadataGeneratorConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AiMetadataGeneratorUpdatePartnerConfigurationAction extends KalturaRequest<KalturaAiMetadataGeneratorConfiguration> {

    configuration : KalturaAiMetadataGeneratorConfiguration;

    constructor(data : AiMetadataGeneratorUpdatePartnerConfigurationActionArgs)
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
				action : { type : 'c', default : 'updatePartnerConfiguration' },
				configuration : { type : 'o', subTypeConstructor : KalturaAiMetadataGeneratorConfiguration, subType : 'KalturaAiMetadataGeneratorConfiguration' }
            }
        );
        return result;
    }
}

