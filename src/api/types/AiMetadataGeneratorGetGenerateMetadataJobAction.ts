
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenerateMetadataBySubtitlesJob } from './KalturaGenerateMetadataBySubtitlesJob';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AiMetadataGeneratorGetGenerateMetadataJobActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'aiMetadataGenerator' action 'getGenerateMetadataJob'.
 *
 * Usage: retrieve the status of the metadata generation job, identified by the subtitles file ID
 *
 * Server response type:         KalturaGenerateMetadataBySubtitlesJob
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AiMetadataGeneratorGetGenerateMetadataJobAction extends KalturaRequest<KalturaGenerateMetadataBySubtitlesJob> {

    id : number;

    constructor(data : AiMetadataGeneratorGetGenerateMetadataJobActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGenerateMetadataBySubtitlesJob', responseConstructor : KalturaGenerateMetadataBySubtitlesJob  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'aimetadatagenerator' },
				action : { type : 'c', default : 'getGenerateMetadataJob' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

