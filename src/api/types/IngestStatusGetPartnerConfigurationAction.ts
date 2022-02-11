
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIngestStatusPartnerConfiguration } from './KalturaIngestStatusPartnerConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IngestStatusGetPartnerConfigurationActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'ingestStatus' action 'getPartnerConfiguration'.
 *
 * Usage: Returns Core Ingest service partner configurations
 *
 * Server response type:         KalturaIngestStatusPartnerConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IngestStatusGetPartnerConfigurationAction extends KalturaRequest<KalturaIngestStatusPartnerConfiguration> {

    

    constructor(data? : IngestStatusGetPartnerConfigurationActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaIngestStatusPartnerConfiguration', responseConstructor : KalturaIngestStatusPartnerConfiguration  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ingeststatus' },
				action : { type : 'c', default : 'getPartnerConfiguration' }
            }
        );
        return result;
    }
}

