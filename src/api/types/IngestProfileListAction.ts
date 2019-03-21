
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIngestProfileListResponse } from './KalturaIngestProfileListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IngestProfileListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'IngestProfile' action 'list'.
 *
 * Usage: Returns all ingest profiles for partner
 *
 * Server response type:         KalturaIngestProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IngestProfileListAction extends KalturaRequest<KalturaIngestProfileListResponse> {

    

    constructor(data? : IngestProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaIngestProfileListResponse', responseConstructor : KalturaIngestProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ingestprofile' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

