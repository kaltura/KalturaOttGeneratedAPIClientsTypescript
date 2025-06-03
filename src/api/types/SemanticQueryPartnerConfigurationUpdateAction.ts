
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSemanticQueryPartnerConfiguration } from './KalturaSemanticQueryPartnerConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SemanticQueryPartnerConfigurationUpdateActionArgs  extends KalturaRequestArgs {
    configuration : KalturaSemanticQueryPartnerConfiguration;
}

/**
 * Build request payload for service 'semanticQueryPartnerConfiguration' action 'update'.
 *
 * Usage: Updates the partner configuration for semantic query service
 *
 * Server response type:         KalturaSemanticQueryPartnerConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SemanticQueryPartnerConfigurationUpdateAction extends KalturaRequest<KalturaSemanticQueryPartnerConfiguration> {

    configuration : KalturaSemanticQueryPartnerConfiguration;

    constructor(data : SemanticQueryPartnerConfigurationUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSemanticQueryPartnerConfiguration', responseConstructor : KalturaSemanticQueryPartnerConfiguration  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'semanticquerypartnerconfiguration' },
				action : { type : 'c', default : 'update' },
				configuration : { type : 'o', subTypeConstructor : KalturaSemanticQueryPartnerConfiguration, subType : 'KalturaSemanticQueryPartnerConfiguration' }
            }
        );
        return result;
    }
}

