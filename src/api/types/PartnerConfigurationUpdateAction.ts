
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaPartnerConfiguration } from './KalturaPartnerConfiguration';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerConfigurationUpdateActionArgs  extends KalturaRequestArgs {
    configuration : KalturaPartnerConfiguration;
}

/**
 * Build request payload for service 'partnerConfiguration' action 'update'.
 *
 * Usage: Update/set Partner Configuration
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PartnerConfigurationUpdateAction extends KalturaRequest<boolean> {

    configuration : KalturaPartnerConfiguration;

    constructor(data : PartnerConfigurationUpdateActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'partnerconfiguration' },
				action : { type : 'c', default : 'update' },
				configuration : { type : 'o', subTypeConstructor : KalturaPartnerConfiguration, subType : 'KalturaPartnerConfiguration' }
            }
        );
        return result;
    }
}

