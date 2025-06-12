
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenerateMetadataResult } from './KalturaGenerateMetadataResult';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AiMetadataGeneratorGetGeneratedMetadataActionArgs  extends KalturaRequestArgs {
    jobId : number;
}

/**
 * Build request payload for service 'aiMetadataGenerator' action 'getGeneratedMetadata'.
 *
 * Usage: retrieve the generated metadata
 *
 * Server response type:         KalturaGenerateMetadataResult
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AiMetadataGeneratorGetGeneratedMetadataAction extends KalturaRequest<KalturaGenerateMetadataResult> {

    jobId : number;

    constructor(data : AiMetadataGeneratorGetGeneratedMetadataActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGenerateMetadataResult', responseConstructor : KalturaGenerateMetadataResult  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'aimetadatagenerator' },
				action : { type : 'c', default : 'getGeneratedMetadata' },
				jobId : { type : 'n' }
            }
        );
        return result;
    }
}

