
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCDNAdapterProfileListResponse } from './KalturaCDNAdapterProfileListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CdnAdapterProfileListActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Returns all CDN adapters for partner
**/
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

