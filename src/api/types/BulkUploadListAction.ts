
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadListResponse } from './KalturaBulkUploadListResponse';

import { KalturaBulkUploadFilter } from './KalturaBulkUploadFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BulkUploadListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaBulkUploadFilter;
}

/**
 * Build request payload for service 'bulkUpload' action 'list'.
 *
 * Usage: Get list of KalturaBulkUpload by filter
 *
 * Server response type:         KalturaBulkUploadListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BulkUploadListAction extends KalturaRequest<KalturaBulkUploadListResponse> {

    filter : KalturaBulkUploadFilter;

    constructor(data? : BulkUploadListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkUploadListResponse', responseConstructor : KalturaBulkUploadListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'bulkupload' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaBulkUploadFilter, subType : 'KalturaBulkUploadFilter' }
            }
        );
        return result;
    }
}

