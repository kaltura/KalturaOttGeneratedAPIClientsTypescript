
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIngestStatusEpgProgramResultListResponse } from './KalturaIngestStatusEpgProgramResultListResponse';

import { KalturaIngestEpgProgramResultFilter } from './KalturaIngestEpgProgramResultFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IngestStatusGetEpgProgramResultListActionArgs  extends KalturaRequestArgs {
    ingestId : number;
	filter? : KalturaIngestEpgProgramResultFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'ingestStatus' action 'getEpgProgramResultList'.
 *
 * Usage: Get as input ingest job id, filter and pager and response with page of filtered detailed ingest job results
 *
 * Server response type:         KalturaIngestStatusEpgProgramResultListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IngestStatusGetEpgProgramResultListAction extends KalturaRequest<KalturaIngestStatusEpgProgramResultListResponse> {

    ingestId : number;
	filter : KalturaIngestEpgProgramResultFilter;
	pager : KalturaFilterPager;

    constructor(data : IngestStatusGetEpgProgramResultListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaIngestStatusEpgProgramResultListResponse', responseConstructor : KalturaIngestStatusEpgProgramResultListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ingeststatus' },
				action : { type : 'c', default : 'getEpgProgramResultList' },
				ingestId : { type : 'n' },
				filter : { type : 'o', subTypeConstructor : KalturaIngestEpgProgramResultFilter, subType : 'KalturaIngestEpgProgramResultFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

