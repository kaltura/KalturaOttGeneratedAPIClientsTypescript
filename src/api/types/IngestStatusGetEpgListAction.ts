
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIngestStatusEpgListResponse } from './KalturaIngestStatusEpgListResponse';

import { KalturaIngestByIdsFilter } from './KalturaIngestByIdsFilter';
import { KalturaIngestByCompoundFilter } from './KalturaIngestByCompoundFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IngestStatusGetEpgListActionArgs  extends KalturaRequestArgs {
    idsFilter? : KalturaIngestByIdsFilter;
	filter? : KalturaIngestByCompoundFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'ingestStatus' action 'getEpgList'.
 *
 * Usage: Response with list of ingest jobs
 *
 * Server response type:         KalturaIngestStatusEpgListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IngestStatusGetEpgListAction extends KalturaRequest<KalturaIngestStatusEpgListResponse> {

    idsFilter : KalturaIngestByIdsFilter;
	filter : KalturaIngestByCompoundFilter;
	pager : KalturaFilterPager;

    constructor(data? : IngestStatusGetEpgListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaIngestStatusEpgListResponse', responseConstructor : KalturaIngestStatusEpgListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ingeststatus' },
				action : { type : 'c', default : 'getEpgList' },
				idsFilter : { type : 'o', subTypeConstructor : KalturaIngestByIdsFilter, subType : 'KalturaIngestByIdsFilter' },
				filter : { type : 'o', subTypeConstructor : KalturaIngestByCompoundFilter, subType : 'KalturaIngestByCompoundFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

