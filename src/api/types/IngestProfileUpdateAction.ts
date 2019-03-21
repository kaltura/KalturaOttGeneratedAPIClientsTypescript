
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIngestProfile } from './KalturaIngestProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IngestProfileUpdateActionArgs  extends KalturaRequestArgs {
    ingestProfileId : number;
	ingestProfile : KalturaIngestProfile;
}

/**
 * Build request payload for service 'IngestProfile' action 'update'.
 *
 * Usage: Update ingest profile details
 *
 * Server response type:         KalturaIngestProfile
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IngestProfileUpdateAction extends KalturaRequest<KalturaIngestProfile> {

    ingestProfileId : number;
	ingestProfile : KalturaIngestProfile;

    constructor(data : IngestProfileUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				ingestProfileId : { type : 'n' },
				ingestProfile : { type : 'o', subTypeConstructor : KalturaIngestProfile, subType : 'KalturaIngestProfile' }
            }
        );
        return result;
    }
}

