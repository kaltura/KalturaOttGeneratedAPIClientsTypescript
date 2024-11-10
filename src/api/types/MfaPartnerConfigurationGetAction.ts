
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMultifactorAuthenticationPartnerConfiguration } from './KalturaMultifactorAuthenticationPartnerConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MfaPartnerConfigurationGetActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'mfaPartnerConfiguration' action 'get'.
 *
 * Usage: Get MFA partner configuration
 *
 * Server response type:         KalturaMultifactorAuthenticationPartnerConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MfaPartnerConfigurationGetAction extends KalturaRequest<KalturaMultifactorAuthenticationPartnerConfiguration> {

    

    constructor(data? : MfaPartnerConfigurationGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMultifactorAuthenticationPartnerConfiguration', responseConstructor : KalturaMultifactorAuthenticationPartnerConfiguration  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'mfapartnerconfiguration' },
				action : { type : 'c', default : 'get' }
            }
        );
        return result;
    }
}

