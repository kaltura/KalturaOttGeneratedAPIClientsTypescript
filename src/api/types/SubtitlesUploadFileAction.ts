
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSubtitles } from './KalturaSubtitles';

import { KalturaUploadSubtitles } from './KalturaUploadSubtitles';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface SubtitlesUploadFileActionArgs  extends KalturaUploadRequestArgs {
    subtitles : KalturaUploadSubtitles;
	fileData : File;
}

/**
 * Build request payload for service 'subtitles' action 'uploadFile'.
 *
 * Usage: Add a subtitles file to be used for generating metadata and enriching the assets using a multi-part form-data body including the JSON configuration object and the uploaded file
 *
 * Server response type:         KalturaSubtitles
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class SubtitlesUploadFileAction extends KalturaUploadRequest<KalturaSubtitles> {

    subtitles : KalturaUploadSubtitles;
	fileData : File;

    constructor(data : SubtitlesUploadFileActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSubtitles', responseConstructor : KalturaSubtitles  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'subtitles' },
				action : { type : 'c', default : 'uploadFile' },
				subtitles : { type : 'o', subTypeConstructor : KalturaUploadSubtitles, subType : 'KalturaUploadSubtitles' },
				fileData : { type : 'f' }
            }
        );
        return result;
    }
}

