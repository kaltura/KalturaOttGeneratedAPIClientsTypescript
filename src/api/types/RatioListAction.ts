
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRatioListResponse } from './KalturaRatioListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RatioListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'ratio' action 'list'.
 *
 * Usage: Get the list of available ratios
 *
 * Server response type:         KalturaRatioListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class RatioListAction extends KalturaRequest<KalturaRatioListResponse> {

    

    constructor(data? : RatioListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRatioListResponse', responseConstructor : KalturaRatioListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ratio' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

