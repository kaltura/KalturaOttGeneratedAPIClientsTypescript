
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPersonalActivityCleanupConfiguration } from './KalturaPersonalActivityCleanupConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PersonalActivityCleanupGetPartnerConfigurationActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'personalActivityCleanup' action 'getPartnerConfiguration'.
 *
 * Usage: PersonalActivityCleanupConfiguration get
 *
 * Server response type:         KalturaPersonalActivityCleanupConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PersonalActivityCleanupGetPartnerConfigurationAction extends KalturaRequest<KalturaPersonalActivityCleanupConfiguration> {

    

    constructor(data? : PersonalActivityCleanupGetPartnerConfigurationActionArgs)
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
				action : { type : 'c', default : 'getPartnerConfiguration' }
            }
        );
        return result;
    }
}

