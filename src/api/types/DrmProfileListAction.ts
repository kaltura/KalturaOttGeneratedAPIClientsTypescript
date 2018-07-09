
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfileListResponse } from './KalturaDrmProfileListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DrmProfileListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'drmProfile' action 'list'.
 *
 * Usage: Returns all DRM adapters for partner
 *
 * Server response type:         KalturaDrmProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DrmProfileListAction extends KalturaRequest<KalturaDrmProfileListResponse> {

    

    constructor(data? : DrmProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDrmProfileListResponse', responseConstructor : KalturaDrmProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'drmprofile' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

