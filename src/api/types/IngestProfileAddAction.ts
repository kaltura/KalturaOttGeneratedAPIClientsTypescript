
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIngestProfile } from './KalturaIngestProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IngestProfileAddActionArgs  extends KalturaRequestArgs {
    ingestProfile : KalturaIngestProfile;
}

/**
 * Build request payload for service 'IngestProfile' action 'add'.
 *
 * Usage: Insert new ingest profile for partner
 *
 * Server response type:         KalturaIngestProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IngestProfileAddAction extends KalturaRequest<KalturaIngestProfile> {

    ingestProfile : KalturaIngestProfile;

    constructor(data : IngestProfileAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaIngestProfile', responseConstructor : KalturaIngestProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ingestprofile' },
				action : { type : 'c', default : 'add' },
				ingestProfile : { type : 'o', subTypeConstructor : KalturaIngestProfile, subType : 'KalturaIngestProfile' }
            }
        );
        return result;
    }
}

