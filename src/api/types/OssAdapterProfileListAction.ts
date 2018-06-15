
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOSSAdapterProfileListResponse } from './KalturaOSSAdapterProfileListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OssAdapterProfileListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'ossAdapterProfile' action 'list'.
 *
 * Usage: Returns all OSS adapters for partner : id + name
 *
 * Server response type:         KalturaOSSAdapterProfileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OssAdapterProfileListAction extends KalturaRequest<KalturaOSSAdapterProfileListResponse> {

    

    constructor(data? : OssAdapterProfileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaOSSAdapterProfileListResponse', responseConstructor : KalturaOSSAdapterProfileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ossadapterprofile' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

