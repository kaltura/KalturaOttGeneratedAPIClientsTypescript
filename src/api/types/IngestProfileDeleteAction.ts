
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IngestProfileDeleteActionArgs  extends KalturaRequestArgs {
    ingestProfileId : number;
}

/**
 * Build request payload for service 'IngestProfile' action 'delete'.
 *
 * Usage: Delete ingest profiles by ingest profiles id
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IngestProfileDeleteAction extends KalturaRequest<boolean> {

    ingestProfileId : number;

    constructor(data : IngestProfileDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ingestprofile' },
				action : { type : 'c', default : 'delete' },
				ingestProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

