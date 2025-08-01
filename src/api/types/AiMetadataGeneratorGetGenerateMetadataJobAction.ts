
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenerateMetadataJob } from './KalturaGenerateMetadataJob';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AiMetadataGeneratorGetGenerateMetadataJobActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'aiMetadataGenerator' action 'getGenerateMetadataJob'.
 *
 * Usage: Get a metadata generation job
 *
 * Server response type:         KalturaGenerateMetadataJob
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AiMetadataGeneratorGetGenerateMetadataJobAction extends KalturaRequest<KalturaGenerateMetadataJob> {

    id : number;

    constructor(data : AiMetadataGeneratorGetGenerateMetadataJobActionArgs)
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
				action : { type : 'c', default : 'getGenerateMetadataJob' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

