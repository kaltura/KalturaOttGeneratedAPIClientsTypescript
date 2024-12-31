
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
import { KalturaBulkUploadAssetData } from './KalturaBulkUploadAssetData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface AssetAddFromBulkUploadActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
	bulkUploadJobData : KalturaBulkUploadJobData;
	bulkUploadAssetData : KalturaBulkUploadAssetData;
}

/**
 * Build request payload for service 'asset' action 'addFromBulkUpload'.
 *
 * Usage: Add new bulk upload batch job Conversion profile id can be specified in the API (note that the total request body size is limited to 10MB)
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class AssetAddFromBulkUploadAction extends KalturaUploadRequest<KalturaBulkUpload> {

    fileData : File;
	bulkUploadJobData : KalturaBulkUploadJobData;
	bulkUploadAssetData : KalturaBulkUploadAssetData;

    constructor(data : AssetAddFromBulkUploadActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkUpload', responseConstructor : KalturaBulkUpload  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'asset' },
				action : { type : 'c', default : 'addFromBulkUpload' },
				fileData : { type : 'f' },
				bulkUploadJobData : { type : 'o', subTypeConstructor : KalturaBulkUploadJobData, subType : 'KalturaBulkUploadJobData' },
				bulkUploadAssetData : { type : 'o', subTypeConstructor : KalturaBulkUploadAssetData, subType : 'KalturaBulkUploadAssetData' }
            }
        );
        return result;
    }
}

