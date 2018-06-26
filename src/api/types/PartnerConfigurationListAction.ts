
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerConfigurationListResponse } from './KalturaPartnerConfigurationListResponse';

import { KalturaPartnerConfigurationFilter } from './KalturaPartnerConfigurationFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerConfigurationListActionArgs  extends KalturaRequestArgs {
    filter : KalturaPartnerConfigurationFilter;
}

/**
 * Build request payload for service 'partnerConfiguration' action 'list'.
 *
 * Usage: Get the list of PartnerConfiguration
 *
 * Server response type:         KalturaPartnerConfigurationListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PartnerConfigurationListAction extends KalturaRequest<KalturaPartnerConfigurationListResponse> {

    filter : KalturaPartnerConfigurationFilter;

    constructor(data : PartnerConfigurationListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPartnerConfigurationListResponse', responseConstructor : KalturaPartnerConfigurationListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'partnerconfiguration' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaPartnerConfigurationFilter, subType : 'KalturaPartnerConfigurationFilter' }
            }
        );
        return result;
    }
}

