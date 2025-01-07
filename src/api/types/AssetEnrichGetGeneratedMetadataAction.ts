
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEnrichedMetadataResult } from './KalturaEnrichedMetadataResult';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetEnrichGetGeneratedMetadataActionArgs  extends KalturaRequestArgs {
    captionUploadJobId : number;
}

/**
 * Build request payload for service 'assetEnrich' action 'getGeneratedMetadata'.
 *
 * Usage: retrieve the generated metadata
 *
 * Server response type:         KalturaEnrichedMetadataResult
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetEnrichGetGeneratedMetadataAction extends KalturaRequest<KalturaEnrichedMetadataResult> {

    captionUploadJobId : number;

    constructor(data : AssetEnrichGetGeneratedMetadataActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEnrichedMetadataResult', responseConstructor : KalturaEnrichedMetadataResult  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetenrich' },
				action : { type : 'c', default : 'getGeneratedMetadata' },
				captionUploadJobId : { type : 'n' }
            }
        );
        return result;
    }
}

