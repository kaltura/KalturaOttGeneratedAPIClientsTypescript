
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaHouseholdPartnerConfiguration } from './KalturaHouseholdPartnerConfiguration';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HouseholdUpdatePartnerConfigurationActionArgs  extends KalturaRequestArgs {
    configuration : KalturaHouseholdPartnerConfiguration;
}

/**
 * Build request payload for service 'household' action 'updatePartnerConfiguration'.
 *
 * Usage: Update household partner configuration
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HouseholdUpdatePartnerConfigurationAction extends KalturaRequest<void> {

    configuration : KalturaHouseholdPartnerConfiguration;

    constructor(data : HouseholdUpdatePartnerConfigurationActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'household' },
				action : { type : 'c', default : 'updatePartnerConfiguration' },
				configuration : { type : 'o', subTypeConstructor : KalturaHouseholdPartnerConfiguration, subType : 'KalturaHouseholdPartnerConfiguration' }
            }
        );
        return result;
    }
}

