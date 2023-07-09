
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVodIngestAssetResultResponse } from './KalturaVodIngestAssetResultResponse';

import { KalturaVodIngestAssetResultFilter } from './KalturaVodIngestAssetResultFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IngestStatusGetVodAssetResultActionArgs  extends KalturaRequestArgs {
    filter? : KalturaVodIngestAssetResultFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'ingestStatus' action 'getVodAssetResult'.
 *
 * Usage: List detailed results of ingested assets
 *
 * Server response type:         KalturaVodIngestAssetResultResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IngestStatusGetVodAssetResultAction extends KalturaRequest<KalturaVodIngestAssetResultResponse> {

    filter : KalturaVodIngestAssetResultFilter;
	pager : KalturaFilterPager;

    constructor(data? : IngestStatusGetVodAssetResultActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaVodIngestAssetResultResponse', responseConstructor : KalturaVodIngestAssetResultResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ingeststatus' },
				action : { type : 'c', default : 'getVodAssetResult' },
				filter : { type : 'o', subTypeConstructor : KalturaVodIngestAssetResultFilter, subType : 'KalturaVodIngestAssetResultFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

