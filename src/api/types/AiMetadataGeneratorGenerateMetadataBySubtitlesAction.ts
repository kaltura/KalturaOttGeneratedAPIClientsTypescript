
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenerateMetadataBySubtitlesJob } from './KalturaGenerateMetadataBySubtitlesJob';

import { KalturaStringValue } from './KalturaStringValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AiMetadataGeneratorGenerateMetadataBySubtitlesActionArgs  extends KalturaRequestArgs {
    subtitlesFileId : number;
	externalAssetIds? : KalturaStringValue[];
}

/**
 * Build request payload for service 'aiMetadataGenerator' action 'generateMetadataBySubtitles'.
 *
 * Usage: Initiate the the process of metadata generation based on the subtitles file
 *
 * Server response type:         KalturaGenerateMetadataBySubtitlesJob
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AiMetadataGeneratorGenerateMetadataBySubtitlesAction extends KalturaRequest<KalturaGenerateMetadataBySubtitlesJob> {

    subtitlesFileId : number;
	externalAssetIds : KalturaStringValue[];

    constructor(data : AiMetadataGeneratorGenerateMetadataBySubtitlesActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGenerateMetadataBySubtitlesJob', responseConstructor : KalturaGenerateMetadataBySubtitlesJob  });
        if (typeof this.externalAssetIds === 'undefined') this.externalAssetIds = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'aimetadatagenerator' },
				action : { type : 'c', default : 'generateMetadataBySubtitles' },
				subtitlesFileId : { type : 'n' },
				externalAssetIds : { type : 'a', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

