
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaIngestStatusPartnerConfiguration } from './KalturaIngestStatusPartnerConfiguration';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IngestStatusUpdatePartnerConfigurationActionArgs  extends KalturaRequestArgs {
    config : KalturaIngestStatusPartnerConfiguration;
}

/**
 * Build request payload for service 'ingestStatus' action 'updatePartnerConfiguration'.
 *
 * Usage: Returns Core Ingest service partner configurations
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IngestStatusUpdatePartnerConfigurationAction extends KalturaRequest<void> {

    config : KalturaIngestStatusPartnerConfiguration;

    constructor(data : IngestStatusUpdatePartnerConfigurationActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ingeststatus' },
				action : { type : 'c', default : 'updatePartnerConfiguration' },
				config : { type : 'o', subTypeConstructor : KalturaIngestStatusPartnerConfiguration, subType : 'KalturaIngestStatusPartnerConfiguration' }
            }
        );
        return result;
    }
}

