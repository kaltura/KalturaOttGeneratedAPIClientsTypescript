
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSemanticQueryPartnerConfiguration } from './KalturaSemanticQueryPartnerConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SemanticQueryGetPartnerConfigurationActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'semanticQuery' action 'getPartnerConfiguration'.
 *
 * Usage: Retrieves the current partner configuration for semantic query
 *
 * Server response type:         KalturaSemanticQueryPartnerConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SemanticQueryGetPartnerConfigurationAction extends KalturaRequest<KalturaSemanticQueryPartnerConfiguration> {

    

    constructor(data? : SemanticQueryGetPartnerConfigurationActionArgs)
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
				action : { type : 'c', default : 'getPartnerConfiguration' }
            }
        );
        return result;
    }
}

