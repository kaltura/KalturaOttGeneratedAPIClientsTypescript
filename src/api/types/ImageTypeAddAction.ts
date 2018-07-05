
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaImageType } from './KalturaImageType';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ImageTypeAddActionArgs  extends KalturaRequestArgs {
    imageType : KalturaImageType;
}

/**
 * Build request payload for service 'imageType' action 'add'.
 *
 * Usage: Add a new image type
 *
 * Server response type:         KalturaImageType
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ImageTypeAddAction extends KalturaRequest<KalturaImageType> {

    imageType : KalturaImageType;

    constructor(data : ImageTypeAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaImageType', responseConstructor : KalturaImageType  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'imagetype' },
				action : { type : 'c', default : 'add' },
				imageType : { type : 'o', subTypeConstructor : KalturaImageType, subType : 'KalturaImageType' }
            }
        );
        return result;
    }
}

