
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionUploadJob } from './KalturaCaptionUploadJob';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AssetEnrichGetCaptionUploadJobActionArgs  extends KalturaRequestArgs {
    captionUploadJobId : number;
}

/**
 * Build request payload for service 'assetEnrich' action 'getCaptionUploadJob'.
 *
 * Usage: retrieve the status of the metadata generation job
 *
 * Server response type:         KalturaCaptionUploadJob
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AssetEnrichGetCaptionUploadJobAction extends KalturaRequest<KalturaCaptionUploadJob> {

    captionUploadJobId : number;

    constructor(data : AssetEnrichGetCaptionUploadJobActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCaptionUploadJob', responseConstructor : KalturaCaptionUploadJob  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'assetenrich' },
				action : { type : 'c', default : 'getCaptionUploadJob' },
				captionUploadJobId : { type : 'n' }
            }
        );
        return result;
    }
}

