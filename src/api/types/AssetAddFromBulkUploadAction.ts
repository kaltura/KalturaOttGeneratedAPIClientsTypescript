
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface AssetAddFromBulkUploadActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
	bulkUploadJobData : KalturaBulkUploadJobData;
}

/**
 * Build request payload for service 'asset' action 'addFromBulkUpload'.
 *
 * Usage: Add new bulk upload batch job Conversion profile id can be specified in the API
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class AssetAddFromBulkUploadAction extends KalturaUploadRequest<number> {

    fileData : File;
	bulkUploadJobData : KalturaBulkUploadJobData;

    constructor(data : AssetAddFromBulkUploadActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
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
				bulkUploadJobData : { type : 'o', subTypeConstructor : KalturaBulkUploadJobData, subType : 'KalturaBulkUploadJobData' }
            }
        );
        return result;
    }
}

