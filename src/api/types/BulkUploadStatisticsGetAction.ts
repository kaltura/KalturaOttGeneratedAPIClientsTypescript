
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadStatistics } from './KalturaBulkUploadStatistics';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BulkUploadStatisticsGetActionArgs  extends KalturaRequestArgs {
    bulkObjectTypeEqual : string;
	createDateGreaterThanOrEqual : number;
}

/**
 * Build request payload for service 'bulkUploadStatistics' action 'get'.
 *
 * Usage: Get BulkUploadStatistics count summary by status
 *
 * Server response type:         KalturaBulkUploadStatistics
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BulkUploadStatisticsGetAction extends KalturaRequest<KalturaBulkUploadStatistics> {

    bulkObjectTypeEqual : string;
	createDateGreaterThanOrEqual : number;

    constructor(data : BulkUploadStatisticsGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkUploadStatistics', responseConstructor : KalturaBulkUploadStatistics  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'bulkuploadstatistics' },
				action : { type : 'c', default : 'get' },
				bulkObjectTypeEqual : { type : 's' },
				createDateGreaterThanOrEqual : { type : 'n' }
            }
        );
        return result;
    }
}

