
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMultifactorAuthenticationPartnerConfiguration } from './KalturaMultifactorAuthenticationPartnerConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MfaPartnerConfigurationUpdateActionArgs  extends KalturaRequestArgs {
    configuration : KalturaMultifactorAuthenticationPartnerConfiguration;
}

/**
 * Build request payload for service 'mfaPartnerConfiguration' action 'update'.
 *
 * Usage: Update MFA partner configuration
 *
 * Server response type:         KalturaMultifactorAuthenticationPartnerConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MfaPartnerConfigurationUpdateAction extends KalturaRequest<KalturaMultifactorAuthenticationPartnerConfiguration> {

    configuration : KalturaMultifactorAuthenticationPartnerConfiguration;

    constructor(data : MfaPartnerConfigurationUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				configuration : { type : 'o', subTypeConstructor : KalturaMultifactorAuthenticationPartnerConfiguration, subType : 'KalturaMultifactorAuthenticationPartnerConfiguration' }
            }
        );
        return result;
    }
}

