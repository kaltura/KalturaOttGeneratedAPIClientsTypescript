
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaImageListResponse } from './KalturaImageListResponse';

import { KalturaImageFilter } from './KalturaImageFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ImageListActionArgs  extends KalturaRequestArgs {
    filter : KalturaImageFilter;
}

/**
 * Build request payload for service 'image' action 'list'.
 *
 * Usage: Get the list of images by different filtering
 *
 * Server response type:         KalturaImageListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ImageListAction extends KalturaRequest<KalturaImageListResponse> {

    filter : KalturaImageFilter;

    constructor(data : ImageListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaImageListResponse', responseConstructor : KalturaImageListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'image' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaImageFilter, subType : 'KalturaImageFilter' }
            }
        );
        return result;
    }
}

