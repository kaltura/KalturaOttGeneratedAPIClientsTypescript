
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenerateMetadataJob } from './KalturaGenerateMetadataJob';

import { KalturaGenerateMetadataBySubtitles } from './KalturaGenerateMetadataBySubtitles';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AiMetadataGeneratorGenerateMetadataBySubtitlesActionArgs  extends KalturaRequestArgs {
    generateMetadataBySubtitles : KalturaGenerateMetadataBySubtitles;
}

/**
 * Build request payload for service 'aiMetadataGenerator' action 'generateMetadataBySubtitles'.
 *
 * Usage: Initiate the process of metadata generation based on the subtitles file.
 * The subtitles file must be previously uploaded using the subtitles.uploadFile service.
 * The service will analyze the subtitle content using AI/LLM to generate enriched metadata including
 * genre, description, keywords, sentiment analysis, and other metadata fields
 *
 * Server response type:         KalturaGenerateMetadataJob
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AiMetadataGeneratorGenerateMetadataBySubtitlesAction extends KalturaRequest<KalturaGenerateMetadataJob> {

    generateMetadataBySubtitles : KalturaGenerateMetadataBySubtitles;

    constructor(data : AiMetadataGeneratorGenerateMetadataBySubtitlesActionArgs)
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
				action : { type : 'c', default : 'generateMetadataBySubtitles' },
				generateMetadataBySubtitles : { type : 'o', subTypeConstructor : KalturaGenerateMetadataBySubtitles, subType : 'KalturaGenerateMetadataBySubtitles' }
            }
        );
        return result;
    }
}

