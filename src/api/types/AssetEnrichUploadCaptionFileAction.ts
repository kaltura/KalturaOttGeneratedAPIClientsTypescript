
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionUploadJob } from './KalturaCaptionUploadJob';

import { KalturaCaptionUploadData } from './KalturaCaptionUploadData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface AssetEnrichUploadCaptionFileActionArgs  extends KalturaUploadRequestArgs {
    json : KalturaCaptionUploadData;
	fileName : File;
}

/**
 * Build request payload for service 'assetEnrich' action 'uploadCaptionFile'.
 *
 * Usage: Add a file to be used for enriching the assets&#39; metadata
 *
 * Server response type:         KalturaCaptionUploadJob
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class AssetEnrichUploadCaptionFileAction extends KalturaUploadRequest<KalturaCaptionUploadJob> {

    json : KalturaCaptionUploadData;
	fileName : File;

    constructor(data : AssetEnrichUploadCaptionFileActionArgs)
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
				action : { type : 'c', default : 'uploadCaptionFile' },
				json : { type : 'o', subTypeConstructor : KalturaCaptionUploadData, subType : 'KalturaCaptionUploadData' },
				fileName : { type : 'f' }
            }
        );
        return result;
    }
}

