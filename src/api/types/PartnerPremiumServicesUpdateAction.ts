
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerPremiumServices } from './KalturaPartnerPremiumServices';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerPremiumServicesUpdateActionArgs  extends KalturaRequestArgs {
    partnerPremiumServices : KalturaPartnerPremiumServices;
}

/**
 * Build request payload for service 'partnerPremiumServices' action 'update'.
 *
 * Usage: update partnerPremiumServices
 *
 * Server response type:         KalturaPartnerPremiumServices
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PartnerPremiumServicesUpdateAction extends KalturaRequest<KalturaPartnerPremiumServices> {

    partnerPremiumServices : KalturaPartnerPremiumServices;

    constructor(data : PartnerPremiumServicesUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPartnerPremiumServices', responseConstructor : KalturaPartnerPremiumServices  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'partnerpremiumservices' },
				action : { type : 'c', default : 'update' },
				partnerPremiumServices : { type : 'o', subTypeConstructor : KalturaPartnerPremiumServices, subType : 'KalturaPartnerPremiumServices' }
            }
        );
        return result;
    }
}

