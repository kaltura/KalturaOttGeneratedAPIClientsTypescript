
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenerateMetadataJob } from './KalturaGenerateMetadataJob';

import { KalturaGenerateProgramMetadatasByDescription } from './KalturaGenerateProgramMetadatasByDescription';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AiMetadataGeneratorGenerateProgramMetadataByDescriptionActionArgs  extends KalturaRequestArgs {
    generateProgramMetadataByDescription : KalturaGenerateProgramMetadatasByDescription;
}

/**
 * Build request payload for service 'aiMetadataGenerator' action 'generateProgramMetadataByDescription'.
 *
 * Usage: Initiate the process of metadata generation for Program assets based on existing asset description metadata.
 * The service will analyze the program&#39;s description and genre metadata using AI/LLM to generate
 * additional enriched metadata fields. This method is specifically designed for Program/EPG assets
 * and supports CRID-based uniqueness, regeneration options, and configurable overwrite behavior.
 * Programs without a CRID are out of scope for this feature
 *
 * Server response type:         KalturaGenerateMetadataJob
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AiMetadataGeneratorGenerateProgramMetadataByDescriptionAction extends KalturaRequest<KalturaGenerateMetadataJob> {

    generateProgramMetadataByDescription : KalturaGenerateProgramMetadatasByDescription;

    constructor(data : AiMetadataGeneratorGenerateProgramMetadataByDescriptionActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGenerateMetadataJob', responseConstructor : KalturaGenerateMetadataJob  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'aimetadatagenerator' },
				action : { type : 'c', default : 'generateProgramMetadataByDescription' },
				generateProgramMetadataByDescription : { type : 'o', subTypeConstructor : KalturaGenerateProgramMetadatasByDescription, subType : 'KalturaGenerateProgramMetadatasByDescription' }
            }
        );
        return result;
    }
}

