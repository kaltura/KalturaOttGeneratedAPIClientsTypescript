
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerListResponse } from './KalturaPartnerListResponse';

import { KalturaPartnerFilter } from './KalturaPartnerFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaPartnerFilter;
}

/**
 * Build request payload for service 'partner' action 'list'.
 *
 * Usage: Internal API !!! Returns the list of active Partners
 *
 * Server response type:         KalturaPartnerListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PartnerListAction extends KalturaRequest<KalturaPartnerListResponse> {

    filter : KalturaPartnerFilter;

    constructor(data? : PartnerListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPartnerListResponse', responseConstructor : KalturaPartnerListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'partner' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaPartnerFilter, subType : 'KalturaPartnerFilter' }
            }
        );
        return result;
    }
}

