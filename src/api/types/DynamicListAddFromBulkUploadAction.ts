
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

import { KalturaBulkUploadExcelJobData } from './KalturaBulkUploadExcelJobData';
import { KalturaBulkUploadDynamicListData } from './KalturaBulkUploadDynamicListData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface DynamicListAddFromBulkUploadActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
	jobData : KalturaBulkUploadExcelJobData;
	bulkUploadData : KalturaBulkUploadDynamicListData;
}

/**
 * Build request payload for service 'dynamicList' action 'addFromBulkUpload'.
 *
 * Usage: Add new bulk upload batch job Conversion profile id can be specified in the API
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class DynamicListAddFromBulkUploadAction extends KalturaUploadRequest<KalturaBulkUpload> {

    fileData : File;
	jobData : KalturaBulkUploadExcelJobData;
	bulkUploadData : KalturaBulkUploadDynamicListData;

    constructor(data : DynamicListAddFromBulkUploadActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkUpload', responseConstructor : KalturaBulkUpload  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'dynamiclist' },
				action : { type : 'c', default : 'addFromBulkUpload' },
				fileData : { type : 'f' },
				jobData : { type : 'o', subTypeConstructor : KalturaBulkUploadExcelJobData, subType : 'KalturaBulkUploadExcelJobData' },
				bulkUploadData : { type : 'o', subTypeConstructor : KalturaBulkUploadDynamicListData, subType : 'KalturaBulkUploadDynamicListData' }
            }
        );
        return result;
    }
}

