
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHouseholdPartnerConfiguration } from './KalturaHouseholdPartnerConfiguration';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdGetPartnerConfigurationActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'household' action 'getPartnerConfiguration'.
 *
 * Usage: Get household partner configuration
 *
 * Server response type:         KalturaHouseholdPartnerConfiguration
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdGetPartnerConfigurationAction extends KalturaRequest<KalturaHouseholdPartnerConfiguration> {

    

    constructor(data? : HouseholdGetPartnerConfigurationActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHouseholdPartnerConfiguration', responseConstructor : KalturaHouseholdPartnerConfiguration  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'household' },
				action : { type : 'c', default : 'getPartnerConfiguration' }
            }
        );
        return result;
    }
}

