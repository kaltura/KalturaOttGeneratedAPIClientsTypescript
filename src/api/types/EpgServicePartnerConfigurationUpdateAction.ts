
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaEpgServicePartnerConfiguration } from './KalturaEpgServicePartnerConfiguration';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EpgServicePartnerConfigurationUpdateActionArgs  extends KalturaRequestArgs {
    config : KalturaEpgServicePartnerConfiguration;
}

/**
 * Build request payload for service 'epgServicePartnerConfiguration' action 'update'.
 *
 * Usage: Returns EPG cache service partner configurations
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EpgServicePartnerConfigurationUpdateAction extends KalturaRequest<void> {

    config : KalturaEpgServicePartnerConfiguration;

    constructor(data : EpgServicePartnerConfigurationUpdateActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'epgservicepartnerconfiguration' },
				action : { type : 'c', default : 'update' },
				config : { type : 'o', subTypeConstructor : KalturaEpgServicePartnerConfiguration, subType : 'KalturaEpgServicePartnerConfiguration' }
            }
        );
        return result;
    }
}

