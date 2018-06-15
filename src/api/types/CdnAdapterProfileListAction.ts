
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCDNAdapterProfileListResponse } from './KalturaCDNAdapterProfileListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CdnAdapterProfileListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'cdnAdapterProfile' action 'list'.
 *
 * Usage: Returns all CDN adapters for partner
 *
 * Server response type:         KalturaCDNAdapterProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CdnAdapterProfileListAction extends KalturaRequest<KalturaCDNAdapterProfileListResponse> {

    

    constructor(data? : CdnAdapterProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCDNAdapterProfileListResponse', responseConstructor : KalturaCDNAdapterProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'cdnadapterprofile' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

