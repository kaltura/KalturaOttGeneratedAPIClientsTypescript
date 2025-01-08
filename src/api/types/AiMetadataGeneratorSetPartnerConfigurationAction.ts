
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAiMetadataGeneratorConfiguration } from './KalturaAiMetadataGeneratorConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AiMetadataGeneratorSetPartnerConfigurationActionArgs  extends KalturaRequestArgs {
    configuration : KalturaAiMetadataGeneratorConfiguration;
}

/**
 * Build request payload for service 'aiMetadataGenerator' action 'setPartnerConfiguration'.
 *
 * Usage: update feature configuration
 *
 * Server response type:         KalturaAiMetadataGeneratorConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AiMetadataGeneratorSetPartnerConfigurationAction extends KalturaRequest<KalturaAiMetadataGeneratorConfiguration> {

    configuration : KalturaAiMetadataGeneratorConfiguration;

    constructor(data : AiMetadataGeneratorSetPartnerConfigurationActionArgs)
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
				action : { type : 'c', default : 'setPartnerConfiguration' },
				configuration : { type : 'o', subTypeConstructor : KalturaAiMetadataGeneratorConfiguration, subType : 'KalturaAiMetadataGeneratorConfiguration' }
            }
        );
        return result;
    }
}

