
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSemanticQueryPartnerConfiguration } from './KalturaSemanticQueryPartnerConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SemanticQueryUpdatePartnerConfigurationActionArgs  extends KalturaRequestArgs {
    configuration : KalturaSemanticQueryPartnerConfiguration;
}

/**
 * Build request payload for service 'semanticQuery' action 'updatePartnerConfiguration'.
 *
 * Usage: Updates the partner configuration for semantic query
 *
 * Server response type:         KalturaSemanticQueryPartnerConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SemanticQueryUpdatePartnerConfigurationAction extends KalturaRequest<KalturaSemanticQueryPartnerConfiguration> {

    configuration : KalturaSemanticQueryPartnerConfiguration;

    constructor(data : SemanticQueryUpdatePartnerConfigurationActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSemanticQueryPartnerConfiguration', responseConstructor : KalturaSemanticQueryPartnerConfiguration  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'semanticquery' },
				action : { type : 'c', default : 'updatePartnerConfiguration' },
				configuration : { type : 'o', subTypeConstructor : KalturaSemanticQueryPartnerConfiguration, subType : 'KalturaSemanticQueryPartnerConfiguration' }
            }
        );
        return result;
    }
}

