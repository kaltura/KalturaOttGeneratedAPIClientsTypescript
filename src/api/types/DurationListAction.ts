
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDurationListResponse } from './KalturaDurationListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DurationListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'duration' action 'list'.
 *
 * Usage: Get the list of optinal Duration codes
 *
 * Server response type:         KalturaDurationListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DurationListAction extends KalturaRequest<KalturaDurationListResponse> {

    

    constructor(data? : DurationListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDurationListResponse', responseConstructor : KalturaDurationListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'duration' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

