
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadListResponse } from './KalturaBulkUploadListResponse';

import { KalturaBulkUploadFilter } from './KalturaBulkUploadFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BulkUploadListActionArgs  extends KalturaRequestArgs {
    filter : KalturaBulkUploadFilter;
	pager? : KalturaFilterPager;
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
	pager : KalturaFilterPager;

    constructor(data : BulkUploadListActionArgs)
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
				filter : { type : 'o', subTypeConstructor : KalturaBulkUploadFilter, subType : 'KalturaBulkUploadFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

