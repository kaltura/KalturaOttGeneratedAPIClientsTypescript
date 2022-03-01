
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIngestEpgDetails } from './KalturaIngestEpgDetails';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IngestStatusGetEpgDetailsActionArgs  extends KalturaRequestArgs {
    ingestId : number;
}

/**
 * Build request payload for service 'ingestStatus' action 'getEpgDetails'.
 *
 * Usage: Returns information about specific Ingest job
 *
 * Server response type:         KalturaIngestEpgDetails
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IngestStatusGetEpgDetailsAction extends KalturaRequest<KalturaIngestEpgDetails> {

    ingestId : number;

    constructor(data : IngestStatusGetEpgDetailsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaIngestEpgDetails', responseConstructor : KalturaIngestEpgDetails  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ingeststatus' },
				action : { type : 'c', default : 'getEpgDetails' },
				ingestId : { type : 'n' }
            }
        );
        return result;
    }
}

