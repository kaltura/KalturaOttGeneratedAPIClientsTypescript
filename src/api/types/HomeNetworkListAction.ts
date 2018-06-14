
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaHomeNetworkListResponse } from './KalturaHomeNetworkListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HomeNetworkListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'homeNetwork' action 'list'.
 *
 * Usage: Retrieve the household’s home networks
 *
 * Server response type:         KalturaHomeNetworkListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class HomeNetworkListAction extends KalturaRequest<KalturaHomeNetworkListResponse> {

    

    constructor(data? : HomeNetworkListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaHomeNetworkListResponse', responseConstructor : KalturaHomeNetworkListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'homenetwork' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

