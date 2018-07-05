
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadToken } from './KalturaUploadToken';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface UploadTokenUploadActionArgs  extends KalturaUploadRequestArgs {
    uploadTokenId : string;
	fileData : File;
}

/**
 * Build request payload for service 'uploadToken' action 'upload'.
 *
 * Usage: Upload a file using the upload token id
 *
 * Server response type:         KalturaUploadToken
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class UploadTokenUploadAction extends KalturaUploadRequest<KalturaUploadToken> {

    uploadTokenId : string;
	fileData : File;

    constructor(data : UploadTokenUploadActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUploadToken', responseConstructor : KalturaUploadToken  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'uploadtoken' },
				action : { type : 'c', default : 'upload' },
				uploadTokenId : { type : 's' },
				fileData : { type : 'f' }
            }
        );
        return result;
    }
}

