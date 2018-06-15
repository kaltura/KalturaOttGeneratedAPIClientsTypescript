
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportListResponse } from './KalturaReportListResponse';

import { KalturaReportFilter } from './KalturaReportFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ReportListActionArgs  extends KalturaRequestArgs {
    filter : KalturaReportFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'report' action 'list'.
 *
 * Usage: Return device configurations retrieval log. Supports paging and can be filtered with the parameter &quot;FromData&quot;
 *
 * Server response type:         KalturaReportListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ReportListAction extends KalturaRequest<KalturaReportListResponse> {

    filter : KalturaReportFilter;
	pager : KalturaFilterPager;

    constructor(data : ReportListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaReportListResponse', responseConstructor : KalturaReportListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'report' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaReportFilter, subType : 'KalturaReportFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

