
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenerateMetadataJob } from './KalturaGenerateMetadataJob';

import { KalturaGenerateMetadataByDescription } from './KalturaGenerateMetadataByDescription';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AiMetadataGeneratorGenerateMetadataByDescriptionActionArgs  extends KalturaRequestArgs {
    generateMetadataByDescription : KalturaGenerateMetadataByDescription;
}

/**
 * Build request payload for service 'aiMetadataGenerator' action 'generateMetadataByDescription'.
 *
 * Usage: Initiate the process of metadata generation based on existing asset description metadata.
 * The service will analyze the asset&#39;s description and genre metadata using AI/LLM to generate
 * additional enriched metadata fields including enhanced genre classifications, sentiment analysis,
 * and relevant keywords. This method is useful for enriching assets that already have basic
 * description metadata but need additional AI-generated metadata fields
 *
 * Server response type:         KalturaGenerateMetadataJob
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AiMetadataGeneratorGenerateMetadataByDescriptionAction extends KalturaRequest<KalturaGenerateMetadataJob> {

    generateMetadataByDescription : KalturaGenerateMetadataByDescription;

    constructor(data : AiMetadataGeneratorGenerateMetadataByDescriptionActionArgs)
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
				action : { type : 'c', default : 'generateMetadataByDescription' },
				generateMetadataByDescription : { type : 'o', subTypeConstructor : KalturaGenerateMetadataByDescription, subType : 'KalturaGenerateMetadataByDescription' }
            }
        );
        return result;
    }
}

