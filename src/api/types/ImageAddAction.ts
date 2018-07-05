
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaImage } from './KalturaImage';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ImageAddActionArgs  extends KalturaRequestArgs {
    image : KalturaImage;
}

/**
 * Build request payload for service 'image' action 'add'.
 *
 * Usage: Add a new image
 *
 * Server response type:         KalturaImage
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ImageAddAction extends KalturaRequest<KalturaImage> {

    image : KalturaImage;

    constructor(data : ImageAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaImage', responseConstructor : KalturaImage  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'image' },
				action : { type : 'c', default : 'add' },
				image : { type : 'o', subTypeConstructor : KalturaImage, subType : 'KalturaImage' }
            }
        );
        return result;
    }
}

