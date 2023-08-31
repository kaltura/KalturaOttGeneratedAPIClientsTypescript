
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPersonalActivityCleanupConfiguration } from './KalturaPersonalActivityCleanupConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PersonalActivityCleanupUpdatePartnerConfigurationActionArgs  extends KalturaRequestArgs {
    personalActivityCleanupConfiguration : KalturaPersonalActivityCleanupConfiguration;
}

/**
 * Build request payload for service 'personalActivityCleanup' action 'updatePartnerConfiguration'.
 *
 * Usage: PersonalActivityCleanupConfiguration Update
 *
 * Server response type:         KalturaPersonalActivityCleanupConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PersonalActivityCleanupUpdatePartnerConfigurationAction extends KalturaRequest<KalturaPersonalActivityCleanupConfiguration> {

    personalActivityCleanupConfiguration : KalturaPersonalActivityCleanupConfiguration;

    constructor(data : PersonalActivityCleanupUpdatePartnerConfigurationActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPersonalActivityCleanupConfiguration', responseConstructor : KalturaPersonalActivityCleanupConfiguration  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'personalactivitycleanup' },
				action : { type : 'c', default : 'updatePartnerConfiguration' },
				personalActivityCleanupConfiguration : { type : 'o', subTypeConstructor : KalturaPersonalActivityCleanupConfiguration, subType : 'KalturaPersonalActivityCleanupConfiguration' }
            }
        );
        return result;
    }
}

