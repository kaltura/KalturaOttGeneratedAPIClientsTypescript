
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartner } from './KalturaPartner';

import { KalturaPartnerSetup } from './KalturaPartnerSetup';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerAddActionArgs  extends KalturaRequestArgs {
    partner : KalturaPartner;
	partnerSetup : KalturaPartnerSetup;
}

/**
 * Build request payload for service 'partner' action 'add'.
 *
 * Usage: Add a partner with default user
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PartnerAddAction extends KalturaRequest<KalturaPartner> {

    partner : KalturaPartner;
	partnerSetup : KalturaPartnerSetup;

    constructor(data : PartnerAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPartner', responseConstructor : KalturaPartner  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'partner' },
				action : { type : 'c', default : 'add' },
				partner : { type : 'o', subTypeConstructor : KalturaPartner, subType : 'KalturaPartner' },
				partnerSetup : { type : 'o', subTypeConstructor : KalturaPartnerSetup, subType : 'KalturaPartnerSetup' }
            }
        );
        return result;
    }
}

