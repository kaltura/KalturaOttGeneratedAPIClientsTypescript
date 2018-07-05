
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaFileListResponse } from './KalturaMediaFileListResponse';

import { KalturaMediaFileFilter } from './KalturaMediaFileFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaFileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaMediaFileFilter;
}

/**
 * Build request payload for service 'mediaFile' action 'list'.
 *
 * Usage: Returns a list of media-file
 *
 * Server response type:         KalturaMediaFileListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaFileListAction extends KalturaRequest<KalturaMediaFileListResponse> {

    filter : KalturaMediaFileFilter;

    constructor(data? : MediaFileListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaFileListResponse', responseConstructor : KalturaMediaFileListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'mediafile' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaMediaFileFilter, subType : 'KalturaMediaFileFilter' }
            }
        );
        return result;
    }
}

