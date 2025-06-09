
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSemanticQueryPartnerConfiguration } from './KalturaSemanticQueryPartnerConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SemanticQueryPartnerConfigurationGetActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'semanticQueryPartnerConfiguration' action 'get'.
 *
 * Usage: Retrieves partner configuration for semantic query service
 *
 * Server response type:         KalturaSemanticQueryPartnerConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SemanticQueryPartnerConfigurationGetAction extends KalturaRequest<KalturaSemanticQueryPartnerConfiguration> {

    

    constructor(data? : SemanticQueryPartnerConfigurationGetActionArgs)
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
				action : { type : 'c', default : 'get' }
            }
        );
        return result;
    }
}

