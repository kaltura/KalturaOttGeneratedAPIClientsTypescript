
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaFileTypeListResponse } from './KalturaMediaFileTypeListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaFileTypeListActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'mediaFileType' action 'list'.
 *
 * Usage: Returns a list of media-file types
 *
 * Server response type:         KalturaMediaFileTypeListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaFileTypeListAction extends KalturaRequest<KalturaMediaFileTypeListResponse> {

    

    constructor(data? : MediaFileTypeListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaFileTypeListResponse', responseConstructor : KalturaMediaFileTypeListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'mediafiletype' },
				action : { type : 'c', default : 'list' }
            }
        );
        return result;
    }
}

