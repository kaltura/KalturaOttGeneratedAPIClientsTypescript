
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerPremiumServices } from './KalturaPartnerPremiumServices';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerPremiumServicesGetActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'partnerPremiumServices' action 'get'.
 *
 * Usage: Returns list of services
 *
 * Server response type:         KalturaPartnerPremiumServices
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PartnerPremiumServicesGetAction extends KalturaRequest<KalturaPartnerPremiumServices> {

    

    constructor(data? : PartnerPremiumServicesGetActionArgs)
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
				action : { type : 'c', default : 'get' }
            }
        );
        return result;
    }
}

