
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaImageTypeListResponse } from './KalturaImageTypeListResponse';

import { KalturaImageTypeFilter } from './KalturaImageTypeFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ImageTypeListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaImageTypeFilter;
}

/**
 * Build request payload for service 'imageType' action 'list'.
 *
 * Usage: Get the list of image types for the partner
 *
 * Server response type:         KalturaImageTypeListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ImageTypeListAction extends KalturaRequest<KalturaImageTypeListResponse> {

    filter : KalturaImageTypeFilter;

    constructor(data? : ImageTypeListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaImageTypeListResponse', responseConstructor : KalturaImageTypeListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'imagetype' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaImageTypeFilter, subType : 'KalturaImageTypeFilter' }
            }
        );
        return result;
    }
}

